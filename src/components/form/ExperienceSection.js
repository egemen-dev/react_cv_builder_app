import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";
import { useState } from "react";

export default function ExperienceSection({
  sectionName,
  index,
  setEducations,
  setWorks,
  educations,
  works,
}) {
  function update(sectionName, index, key, value) {
    if (sectionName === "educations") {
      const newEducations = [...educations];
      newEducations[index][key] = value;
      setEducations(newEducations);
    }
    if (sectionName === "works") {
      const newWorks = [...works];
      newWorks[index][key] = value;
      setWorks(newWorks);
    }
  }

  function getBulletPoints(sectionName, index) {
    if (sectionName === "educations") {
      return educations[index].bulletPoints;
    }
    if (sectionName === "works") {
      return works[index].bulletPoints;
    }
  }

  const [bulletPoints, setBulletPoints] = useState(getBulletPoints(sectionName, index));

  return (
    <>
      <hr className="col-span-2 border-b-2.5 border-gray-300 dark:border-gray-600" />
      <section key={index} className="col-span-2 grid grid-cols-2 gap-6">
        <Input
          label={sectionName === "work" ? "Company" : "Institution"}
          onChange={(e) => {
            update(sectionName, index, "title", e.target.value);
          }}
        />
        <Input
          label={sectionName === "work" ? "Position" : "Degree"}
          onChange={(e) => {
            update(sectionName, index, "subTitle", e.target.value);
          }}
        />
        <Input
          index={2}
          label="From"
          type="date"
          onChange={(e) => {
            update(sectionName, index, "from", e.target.value);
          }}
        />
        <Input
          label="Until"
          type="date"
          onChange={(e) => {
            update(sectionName, index, "until", e.target.value);
          }}
        />
        <Textarea
          label="Details"
          onChange={(e) => {
            update(sectionName, index, "details", e.target.value);
          }}
        ></Textarea>
        <div className="flex flex-col col-span-2 ">
          <label className="label">
            <span className="label-text">Bullet Points</span>
          </label>
          <div className="border-2 border-gray-300 dark:border-gray-600 rounded-xl p-2.5">
            {bulletPoints &&
              bulletPoints.map((bulletPoint, bulletPointIndex) => (
                <Input
                  index={bulletPointIndex}
                  onChange={(e) => {
                    const newBulletPoints = [...bulletPoints];
                    newBulletPoints[bulletPointIndex] = e.target.value;
                    setBulletPoints(newBulletPoints);
                    update(sectionName, index, "bulletPoints", newBulletPoints);
                  }}
                />
              ))}
            <div className="flex flex-row gap-2 justify-end py-8">
              <Button
                label="Remove Point"
                className="btn btn-outline btn-error flex-grow"
                onClick={() => {
                  const newBulletPoints = [...bulletPoints];
                  newBulletPoints.pop();
                  setBulletPoints(newBulletPoints);
                  update(sectionName, index, "bulletPoints", newBulletPoints);
                }}
              />
              <Button
                label="Add Point"
                className="btn btn-outline btn-accent flex-grow"
                onClick={() => {
                  const newBulletPoints = [...bulletPoints];
                  newBulletPoints.push("");
                  setBulletPoints(newBulletPoints);
                  update(sectionName, index, "bulletPoints", newBulletPoints);
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
