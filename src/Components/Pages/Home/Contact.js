import React from "react";

const Contact = () => {
  return (
    <section className="mt-20 bg-info py-5 ">
      <div className="w-2/3 mx-auto flex justify-center items-center flex-col">
        <h1 className="text-4xl text-center font-semibold text-accent max-w-xl capitalize my-5">
          Let us handle your project, professionally.
        </h1>
        <form action="" className="w-full mt-5 ">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs mt-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs mt-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Email</label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs mt-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Phone</label>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs mt-2"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="">Message</label>
              <textarea
                class="textarea textarea-bordered"
                placeholder="Bio"
              ></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
