import "./styles/style.css";
import { useState } from "react";
import dummy from "./utils/dummy";
import Input from "./components/form/Input";
import Button from "./components/form/Button";
import Textarea from "./components/form/Textarea";
import Section from "./components/preview/Section";
import CvHeader from "./components/preview/Header";
import InputSection from "./components/form/InputSection";
import CollapsibleCard from "./components/form/CollapsibleCard";

function App() {
  const [workSection, setWorkSection] = useState([]);
  const [educationSection, setEducationSection] = useState([]);
  const [name, setName] = useState(dummy.name);
  const [mail, setMail] = useState(dummy.mail);
  const [phone, setPhone] = useState(dummy.phone);
  const [website, setWebsite] = useState(dummy.website);
  const [projects, setProjects] = useState(dummy.projects);
  const [skills, setSkills] = useState(dummy.skills);

  const baseWorkSection = {
    title: dummy.work.title,
    subTitle: dummy.work.subTitle,
    details: dummy.work.details,
    from: dummy.work.from,
    until: dummy.work.until,
  };

  const baseEducationSection = {
    title: dummy.education.title,
    subTitle: dummy.education.subTitle,
    details: dummy.education.details,
    from: dummy.education.from,
    until: dummy.education.until,
  };

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
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <Input
              label="Website"
              placeholder={dummy.website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </CollapsibleCard>

          <CollapsibleCard title="Education">
            {educationSection.map((_item, index) => (
              <InputSection
                index={index}
                sectionName="education"
                educationSection={educationSection} // getter state function
                setEducationSection={setEducationSection} // setter state function
              />
            ))}

            {educationSection.length > 0 && (
              <Button
                label="Remove"
                sectionName="education"
                className="btn btn-outline btn-outline col-span-full"
                onClick={() => setEducationSection(educationSection.slice(0, -1))}
              />
            )}
            {educationSection.length < 4 && (
              <Button
                label="Add More"
                sectionName="education"
                onClick={() =>
                  setEducationSection([...educationSection, baseEducationSection])
                }
              />
            )}
          </CollapsibleCard>

          <CollapsibleCard title="Work Experience">
            {workSection.map((_item, index) => (
              <InputSection
                index={index}
                sectionName="work"
                workSection={workSection} // getter state function
                setWorkSection={setWorkSection} // setter state function
              />
            ))}

            {workSection.length > 0 && (
              <Button
                label="Remove"
                sectionName="work"
                className="btn btn-outline btn-outline col-span-full"
                onClick={() => setWorkSection(workSection.slice(0, -1))}
              />
            )}
            {workSection.length < 4 && (
              <Button
                label="Add More"
                sectionName="work"
                onClick={() => setWorkSection([...workSection, baseWorkSection])}
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
            <hr className="border-b-2.5 border-gray-400 dark:border-gray-600" />
            <section>
              <h2 className="text-3xl py-2">Education</h2>

              {educationSection.map((state, index) => (
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
            <hr className="border-b-2.5 border-gray-400 dark:border-gray-600" />
            <section>
              <h2 className="text-3xl py-2">Work Experience</h2>

              {workSection.map((state, index) => (
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
            <hr className="border-b-2.5 border-gray-400 dark:border-gray-600" />
            <section>
              <h2 className="text-3xl py-2">Projects & Skills</h2>
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
