import "./styles/style.css";
import { useState } from "react";
import dummy from "./utils/dummy.json";
import Input from "./components/form/Input";
import Button from "./components/form/Button";
import Textarea from "./components/form/Textarea";
import Section from "./components/preview/Section";
import CvHeader from "./components/preview/Header";
import InputSection from "./components/form/InputSection";
import CollapsibleCard from "./components/form/CollapsibleCard";

function App() {
  const [name, setName] = useState(dummy.name);
  const [mail, setMail] = useState(dummy.mail);
  const [phone, setPhone] = useState(dummy.phone);
  const [website, setWebsite] = useState(dummy.website);
  const [educations, setEducations] = useState(dummy.educations);
  const [works, setWorks] = useState(dummy.works);
  const [skills, setSkills] = useState(dummy.projects);

  const [experience, setExperience] = useState({
    from: "01/01/2020",
    until: "01/01/2021",
    title: "Lorem Ipsum",
    subTitle: "Lorem Ipsum Dolor",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bulletPoints: ["Very good at stuff"],
  });

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-11/12 md:w-3/4 py-6 h-screen container gap-6 mx-auto">
        <div className="flex flex-col gap-5 non-printable place-self-center">
          <CollapsibleCard title="General Info">
            <Input
              label="Name"
              placeholder={dummy.name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Email"
              placeholder={dummy.mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <Input
              label="Phone number"
              placeholder={dummy.phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Input
              label="Website"
              placeholder={dummy.website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </CollapsibleCard>

          <CollapsibleCard title="Education">
            {educations.map((item, index) => (
              <InputSection
                sectionName="educations"
                index={index}
                educations={educations}
                setEducations={setEducations}
              />
            ))}
            <div className="flex flex-row gap-2 py-8 col-span-full">
              {educations.length > 0 && (
                <Button
                  label="Remove Education"
                  sectionName="education"
                  className="btn btn-outline btn-outline flex-grow"
                  onClick={() => setEducations([...educations].slice(0, -1))}
                />
              )}
              {educations.length < 3 && (
                <Button
                  label="Add More Education"
                  sectionName="educations"
                  onClick={() => {
                    setEducations([...educations, { ...experience }]);
                  }}
                />
              )}
            </div>
          </CollapsibleCard>

          <CollapsibleCard title="Work Experience">
            {works.map((item, index) => (
              <InputSection
                index={index}
                sectionName="works"
                works={works}
                setWorks={setWorks}
              />
            ))}
            {works.length > 0 && (
              <Button
                label="Remove Experience"
                sectionName="works"
                className="btn btn-outline btn-outline col-span-full"
                onClick={() => setWorks([...works].slice(0, -1))}
              />
            )}
            {works.length < 3 && (
              <Button
                label="Add More Experience"
                sectionName="works"
                onClick={() => setWorks([...works, { ...experience }])}
              />
            )}
          </CollapsibleCard>

          <CollapsibleCard title="Projects & Skills">
            <Textarea
              placeholder={dummy.skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </CollapsibleCard>

          <div className="grid grid-cols-1 non-printable">
            <Button
              label="Download PDF"
              className="btn dark:btn-outline btn-success w-full"
              onClick={() => {
                window.print();
              }}
            />
          </div>
        </div>

        {/* Downloadable CV Starts here */}

        <div className="grid grid-cols-1 w-full gap-6 min-h-content max-h-content printable border-2 border-gray-300 dark:border-gray-600 p-6">
          <div className="flex flex-col justify-start">
            <CvHeader name={name} mail={mail} phone={phone} website={website} />
            <section>
              <h2 className="text-3xl py-2">Education</h2>
              <hr className="border-b-2.5 border-gray-400 dark:border-gray-600" />

              {educations.map((education, index) => (
                <Section index={index} experience={education} />
              ))}
            </section>
            <section>
              <h2 className="text-3xl py-2">Work Experience</h2>
              <hr className="border-b-2.5 border-gray-400 dark:border-gray-600" />

              {works.map((work, index) => (
                <Section index={index} experience={work} />
              ))}
            </section>
            <section>
              <h2 className="text-3xl py-2">Projects & Skills</h2>
              <hr className="border-b-2.5 border-gray-400 dark:border-gray-600" />
              <div className="flex flex-col gap-3">
                <p>{skills}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
