import React from 'react';

const ServiceCard = ({service}) => {
    return (
        <div class="card w-96 bg-base-100 hover:shadow-2xl border">
          <figure class="px-10 pt-10">
            <img
              width={72}
              height={72}
              src={service.logo}
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl text-accent">
              {service.title}
            </h2>
            <h2 class="card-title text-primary text-xl">${service.price}</h2>
            <p className="text-[16px] text-neutral">
              {service.shortDesc}
            </p>
            <div class="card-actions">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
    );
};

export default ServiceCard;