import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { 
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle,
    useUpdateProfile
 } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";

const Signup = () => {
  const [createUserWithEmailAndPassword, EmailUser, EmailLoading, EmailError] =
    useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

if(EmailUser || googleUser){
    console.log(EmailUser || googleUser);
}

  const onSubmit = async(data) => {
    createUserWithEmailAndPassword(data.email, data.password)
    .then(()=> {
       updateProfile({displayName:data.name})
       .then(()=> {
        toast.success("Sugnup successfully!");
        reset();
       })
        

    })
    
  };

  const googleSignin = ()=> {
    signInWithGoogle()
    .then(()=>{
        toast.success("Logged in succesfully")
    })

  }

  return (
    <div class=" bg-base-200">
      <div class=" w-full shadow-2xl bg-base-100 px-6 md:px-0 md:w-1/3 mx-auto rounded-lg">
        <h1 className="text-center text-3xl font-semibold mt-5 text-accent">
          Signup
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} action="">
          <div class="card-body">
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full "
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
              />
              <label class="label">
                {errors.name?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full "
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Please provide valid email",
                  },
                })}
              />
              <label class="label">
                {errors.email?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span class="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full "
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "You cannot provide less then 6 digit",
                  },
                })}
              />
              <label class="label">
                {errors.password?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span class="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            <Link to="/login" class="label-text-alt link link-hover">
              Already have an account ?
            </Link>

            <div class="form-control mt-6">
              {EmailLoading || updating ? (
                <button class="btn btn-primary loading">loading</button>
              ) : (
                <button class="btn btn-primary">Signup</button>
              )}
              {EmailError || updateError && (
                <span class="label-text-alt text-red-500 mt-2">
                  {EmailError.message || updateError.message}
                </span>
              )}
            </div>
            <div class="divider">OR</div>
            <button onClick={googleSignin} class="btn btn-primary">Continue with google</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
