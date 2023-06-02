import "./styles/style.css";
import { useState } from "react";
import dummy from "./utils/dummy.json";
import FormSection from "./components/FormSection";
import PreviewSection from "./components/PreviewSection";

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
          <FormSection
            setName={setName}
            setMail={setMail}
            setPhone={setPhone}
            setWebsite={setWebsite}
            setEducations={setEducations}
            setWorks={setWorks}
            setSkills={setSkills}
            educations={educations}
            works={works}
            experience={experience}
          />
        </div>

        <div className="grid grid-cols-1 w-full gap-6 min-h-content max-h-content printable border-2 border-gray-300 dark:border-gray-600 p-6">
          <div className="flex flex-col justify-start">
            <PreviewSection
              name={name}
              mail={mail}
              phone={phone}
              website={website}
              educations={educations}
              works={works}
              skills={skills}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
