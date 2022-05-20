import React from "react";

const TestimonialsCard = ({ data }) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl shadow-xl border mt-5">
      <div className="flex items-center gap-5 m-4">
        <img className="w-16" src={data.img} alt="" />
        <div>
          <h4 className="text-accent text-xl font-semibold">{data.name}</h4>
          <p className="text-accent text-[16px] font-semibold">{data.desig}</p>
        </div>
      </div>
      <div class="flex flex-col justify-start items-start m-4 p-5">
        <h2 className="text-xl text-left">Shoes!</h2>
        <p className="text-[16px] text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
          obcaecati enim natus tempora sapiente odit provident excepturi quia
          impedit nam.
        </p>
        <div class="rating rating-md">
          <input
            type="radio"
            name="rating-7"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            class="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-7"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            class="mask mask-star-2 bg-orange-400"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
