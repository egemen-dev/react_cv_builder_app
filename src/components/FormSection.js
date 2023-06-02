import dummy from "../utils/dummy.json";
import Input from "./form/Input";
import Button from "./form/Button";
import Textarea from "./form/Textarea";
import ExperienceSection from "./form/ExperienceSection";
import CollapsibleCard from "./form/CollapsibleCard";

export default function FormSection({
  setName,
  setMail,
  setPhone,
  setWebsite,
  setEducations,
  setWorks,
  setSkills,
  experience,
  educations,
  works,
}) {
  return (
    <>
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
          <ExperienceSection
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
          <ExperienceSection
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
    </>
  );
}
