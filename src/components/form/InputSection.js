import dummy from "../../utils/dummy";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";
import { useState } from "react";

export default function InputSection({ index, cv, setCv }) {
  return (
    <>
      <hr className="col-span-2 border-b-2.5 border-gray-300 dark:border-gray-600" />
      <section key={index} className="col-span-2 grid grid-cols-2 gap-3 work">
        <Input
          // label={sectionName === "work" ? "Company" : "Institution"}
          // placeholder={dummy.section.title}
          onChange={(e) => {
            // updateWholeSection(currentSection, index, "title", e.target.value);
          }}
        />
        <Input
          // label={sectionName === "work" ? "Position" : "Degree"}
          // placeholder={dummy.section.subTitle}
          onChange={(e) => {
            // updateWholeSection(sectionName, index, "subTitle", e.target.value);
          }}
        />
        <Input
          index={2}
          label="From"
          type="date"
          onChange={(e) => {
            // updateWholeSection(sectionName, index, "from", e.target.value);
          }}
        />
        <Input
          label="Until"
          type="date"
          onChange={(e) => {
            // updateWholeSection(sectionName, index, "until", e.target.value);
          }}
        />

        <Textarea
          label="Details"
          // placeholder={dummy.section.details}
          onChange={(e) => {
            // updateWholeSection(sectionName, index, "details", e.target.value);
          }}
        ></Textarea>

        <div className="flex flex-col gap-2 col-span-2">
          <label className="label">
            <span className="label-text">Bullet Points</span>
          </label>
          {[].map((bulletPoint, bulletPointIndex) => (
            <Input index={bulletPointIndex} className="col-span-2" onChange={(e) => {}} />
          ))}
          <Button label="Add Bullet Point" className="btn btn-ghost" onClick={() => {}} />

          <Button
            label="Remove Bullet Point"
            className="btn btn-ghost"
            onClick={() => {}}
          />
        </div>
      </section>
    </>
  );
}
