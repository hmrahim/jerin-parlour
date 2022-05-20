import React from "react";
import bannerImage from "../../../image/Image/beautiful-young-asian-woman.png"

const Banner = () => {
  return (
    <section>
      <div class="hero min-h-screen bg-base-100 ">
        <div class="hero-content flex-col lg:flex-row-reverse ">
          <img
            src={bannerImage}
            class="max-w-sm rounded-lg "
          />
          <div className="max-w-xl">
            <h1 class="text-5xl font-semibold text-accent">BEAUTY SALON FOR EVERY WOMEN</h1>
            <p class="py-6 text-neutral">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get an Appointment</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
