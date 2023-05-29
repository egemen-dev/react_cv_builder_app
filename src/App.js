import "./styles/style.css";
import Input from "./components/Input";
import Button from "./components/Button";
import Textarea from "./components/Textarea";
import CvHeader from "./components/cv/Header";
import Section from "./components/cv/Section";
import CollapsibleCard from "./components/CollapsibleCard";
import WorkInputSection from "./components/WorkInputSection";
import EducationInputSection from "./components/EducationInputSection";
import { useState } from "react";

function App() {
  const [workSections, setWorkSections] = useState([]);
  const [educationSections, setEducationSections] = useState([]);
  const [name, setName] = useState("John Doe");
  const [mail, setMail] = useState("example@mail.com");
  const [phone, setPhone] = useState("0123456789");
  const [website, setWebsite] = useState("linkedin / github");
  const [skills, setSkills] = useState("JavaScript, React, HTML, CSS");

  const baseSection = {
    title: "Title",
    subTitle: "SubTitle",
    details: "Details",
    from: "2020-01-01",
    until: "2020-01-01",
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-11/12 md:w-3/4 mx-auto py-6">
        <div className="flex flex-col gap-4 non-printable">
          <CollapsibleCard title="General Info">
            <Input
              label="Name"
              placeholder="John Doe"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Email"
              placeholder="mail@example.com"
              onChange={(e) => setMail(e.target.value)}
            />
            <Input
              label="Phone number"
              type="tel"
              placeholder="0123456789"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <Input
              label="Website"
              placeholder="linkedin / github"
              onChange={(e) => setWebsite(e.target.value)}
            />
          </CollapsibleCard>

          <CollapsibleCard title="Education">
            {educationSections.map((_item, index) => (
              <>
                <hr className="col-span-2 border-b-1 my-4 border-black dark:border-white" />
                <EducationInputSection
                  index={index}
                  educationSections={educationSections}
                  setEducationSections={setEducationSections}
                />
              </>
            ))}

            <Button
              label="Add More"
              sectionName="education"
              onClick={() => setEducationSections([...educationSections, baseSection])}
            />
            {educationSections.length > 1 && (
              <Button
                label="Remove"
                sectionName="education"
                onClick={() => setEducationSections(educationSections.slice(0, -1))}
              />
            )}
          </CollapsibleCard>

          <CollapsibleCard title="Work Experience">
            {workSections.map((_item, index) => (
              <>
                <hr className="col-span-2 border-b-1 my-4 border-black dark:border-white" />
                <WorkInputSection
                  index={index}
                  workSections={workSections}
                  setWorkSections={setWorkSections}
                />
              </>
            ))}

            <Button
              label="Add More"
              sectionName="work"
              onClick={() => setWorkSections([...workSections, baseSection])}
            />
            {workSections > 1 && (
              <Button
                label="Remove"
                sectionName="work"
                onClick={() => setWorkSections(workSections.slice(0, -1))}
              />
            )}
          </CollapsibleCard>

          <CollapsibleCard title="Skills">
            <Textarea
              placeholder="HTML, CSS, JavaScript, Ruby, React"
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

        <div className="py-2 grid grid-cols-1 w-full gap-6 min-h-content max-h-content printable">
          <CvHeader name={name} mail={mail} phone={phone} website={website} />
          <section>
            <h2 className="text-3xl">Education</h2>

            {educationSections.map((state, index) => (
              <Section
                key={index}
                title={state.title}
                subTitle={state.subTitle}
                details={state.details}
                from={state.from}
                until={state.until}
              />
            ))}
          </section>
          <hr className="border-b-2 border-black dark:border-white" />
          <section>
            <h2 className="text-3xl pt-3">Work Experience</h2>

            {workSections.map((state, index) => (
              <Section
                key={index}
                title={state.title}
                subTitle={state.subTitle}
                details={state.details}
                from={state.from}
                until={state.until}
              />
            ))}
          </section>
          <hr className="border-b-2 border-black dark:border-white" />
          <section>
            <h2 className="text-3xl py-3">Skills</h2>
            <div className="flex flex-col gap-3">
              <p>{skills}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
