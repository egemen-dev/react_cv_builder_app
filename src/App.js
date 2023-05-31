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
  const dummyExample = { ...dummy };
  const [workSection, setWorkSection] = useState([]);
  const [educationSection, setEducationSection] = useState([]);
  const [cv, setCv] = useState(dummyExample);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-11/12 md:w-3/4 py-6 h-screen container gap-6 mx-auto">
        <div className="flex flex-col gap-5 non-printable place-self-center">
          <CollapsibleCard title="General Info">
            <Input
              label="Name"
              placeholder={dummy.name}
              onChange={(e) => setCv({ ...cv, name: e.target.value })}
            />
            <Input
              label="Email"
              placeholder={dummy.mail}
              onChange={(e) => setCv({ ...cv, mail: e.target.value })}
            />
            <Input
              label="Phone number"
              placeholder={dummy.phone}
              onChange={(e) => {
                setCv({ ...cv, phone: e.target.value });
              }}
            />
            <Input
              label="Website"
              placeholder={dummy.website}
              onChange={(e) => setCv({ ...cv, website: e.target.value })}
            />
          </CollapsibleCard>

          <CollapsibleCard title="Education">
            {cv.education.map((_item, index) => (
              <InputSection
                index={index}
                sectionName="education"
                // educationSection={educationSection} // getter state function
                // setEducationSection={setEducationSection} // setter state function
              />
            ))}

            {cv.education.length > 0 && (
              <Button
                label="Remove Education"
                sectionName="education"
                className="btn btn-outline btn-outline col-span-full"
                // onClick={() => setEducationSection([...cv.education].slice(0, -1))}
              />
            )}
            {educationSection.length < 4 && (
              <Button
                label="Add More Education"
                sectionName="education"
                onClick={() => {
                  // setEducationSection(...cv.education, dummyExample.education[0]);
                }}
              />
            )}
          </CollapsibleCard>

          <CollapsibleCard title="Work Experience">
            {workSection.map((_item, index) => (
              <InputSection
                index={index}
                sectionName="work"
                // workSection={workSection} // getter state function
                // setWorkSection={setWorkSection} // setter state function
              />
            ))}

            {workSection.length > 0 && (
              <Button
                label="Remove Experience"
                sectionName="work"
                className="btn btn-outline btn-outline col-span-full"
                // onClick={() => setWorkSection([...workSection].slice(0, -1))}
              />
            )}
            {workSection.length < 4 && (
              <Button
                label="Add More Experience"
                sectionName="work"
                onClick={() => {
                  // setWorkSection([...workSection, cv.work[0]]);
                }}
              />
            )}
          </CollapsibleCard>

          <CollapsibleCard title="Projects & Skills">
            <Textarea
              placeholder={dummy.skills}
              onChange={(e) => setCv({ ...cv, skills: e.target.value })}
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
            <CvHeader
              name={cv.name}
              mail={cv.mail}
              phone={cv.phone}
              website={cv.website}
            />
            <section>
              <h2 className="text-3xl py-2">Education</h2>
              <hr className="border-b-2.5 border-gray-400 dark:border-gray-600" />

              {cv.education.map((education, index) => (
                <Section index={index} experience={education} />
              ))}
            </section>
            <section>
              <h2 className="text-3xl py-2">Work Experience</h2>
              <hr className="border-b-2.5 border-gray-400 dark:border-gray-600" />

              {workSection.map((work, index) => (
                <Section index={index} experience={work} />
              ))}
            </section>
            <section>
              <h2 className="text-3xl py-2">Projects & Skills</h2>
              <hr className="border-b-2.5 border-gray-400 dark:border-gray-600" />
              <div className="flex flex-col gap-3">
                <p>{cv.skills}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
