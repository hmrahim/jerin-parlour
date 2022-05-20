import React from "react";
import { Link } from "react-router-dom";
import login from "../../../image/5098293.jpg";
import { useForm } from "react-hook-form";
import { 
    useSignInWithGoogle,
    useSignInWithEmailAndPassword
   
 } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";

const Login = () => {
    const [SignInWithEmailAndPassword,loginUser,loginLoading,loginError] = useSignInWithEmailAndPassword(auth)
    const [signInWithGoogle,googleUser,googleLoading,googleError] = useSignInWithGoogle(auth)
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
      } = useForm();

    const onSubmit = data => {
        SignInWithEmailAndPassword(data.email,data.password)
        .then(()=> {
            toast.success("login succesfully")
            reset()

        })
        
    };

    const googleLogin = ()=> {
        signInWithGoogle()
        .then(()=> {
            toast.success("Login succesfully")
        })
    }

  return (
    <div class=" bg-base-200">
      <div class=" w-full shadow-2xl bg-base-100 px-6 md:px-0 md:w-1/3 mx-auto rounded-lg">
        <h1 className="text-center text-3xl font-semibold mt-5 text-accent">
          Login
        </h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div class="card-body">
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full "
                {...register("email", {
                    required:{
                      value:true,
                      message:"Email is required"
    
                    },
                    pattern:{
                        value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message:"Please provide a valid email"
                    }
                  })}
              
              />
              <label class="label">
                  { errors.email?.type === "required" && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}
                  { errors.email?.type === "pattern" && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}
             
           
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
                 required:{
                     value:true,
                     message:"Password is required"
                 },
                 minLength:{
                     value:6,
                     message:"You cannot provide less then 6 digit"
                 }
                  })}
                
              />
              <label class="label">
               
                    {
                        errors.password?.type === "required" && <span className="text-red-500 label-text-alt">{errors.password.message}</span>
                    }
                    {
                        errors.password?.type === "minLength" && <span className="text-red-500 label-text-alt">{errors.password.message}</span>
                    }
                    
               
           
                  
              </label>
            </div>

            <Link to="/forgotpass" class="label-text-alt link link-hover">
              Forgot password?
            </Link>

            <Link to="/signup" class="label-text-alt link link-hover">
              Ceate an account ?
            </Link>

            <div class="form-control mt-6">
                {
                    loginLoading ? 
                    <button class="btn loading btn-primary">Loading</button> 
                    : 
                    <button class="btn btn-primary">Login</button>
                }
           
              {
                  loginError || googleError && <span className="text-red-500 label-text-alt">{loginError.message || googleError.message}</span>
              }
            </div>
            <div class="divider">OR</div>
            <button onClick={googleLogin} class="btn btn-primary">Continue with google</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
