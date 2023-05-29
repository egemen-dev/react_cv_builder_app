import React from "react";

export default function CvHeader({ name, mail, phone, website }) {
  return (
    <section id="generalInfo">
      <h1 id="name" className="flex justify-center w-full text-5xl pb-6">
        {name}
      </h1>
      <div className="flex gap-3 justify-center">
        <p id="mail">{mail}</p>
        <p id="phone">{phone}</p>
        <p id="website">{website}</p>
      </div>
    </section>
  );
}
