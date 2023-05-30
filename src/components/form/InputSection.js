import dummy from "../../utils/dummy";
import Input from "./Input";
import Textarea from "./Textarea";

export default function InputSection({
  index,
  setWorkSection,
  workSection,
  setEducationSection,
  educationSection,
  sectionName,
}) {
  function updateSection(index, key, value, sectionName) {
    if (sectionName === "work") {
      const newSections = [...workSection];
      newSections[index][key] = value;
      setWorkSection(newSections);
    }

    if (sectionName === "education") {
      const newSections = [...educationSection];
      newSections[index][key] = value;
      setEducationSection(newSections);
    }
  }

  return (
    <>
      <hr className="col-span-2 border-b-2.5 border-gray-300 dark:border-gray-600" />
      <section className="col-span-2 grid grid-cols-2 gap-3 work">
        <Input
          label={sectionName === "work" ? "Company" : "Institution"}
          placeholder={sectionName === "work" ? dummy.work.title : dummy.education.title}
          onChange={(e) => {
            updateSection(index, "title", e.target.value, sectionName);
          }}
        />
        <Input
          label={sectionName === "work" ? "Position" : "Degree"}
          placeholder={
            sectionName === "work" ? dummy.work.subTitle : dummy.education.subTitle
          }
          onChange={(e) => {
            updateSection(index, "subTitle", e.target.value, sectionName);
          }}
        />
        <Input
          label="From"
          type="date"
          onChange={(e) => {
            updateSection(index, "from", e.target.value, sectionName);
          }}
        />
        <Input
          label="Until"
          type="date"
          onChange={(e) => {
            updateSection(index, "until", e.target.value, sectionName);
          }}
        />
        <Textarea
          label="Details"
          placeholder={
            sectionName === "work" ? dummy.work.details : dummy.education.details
          }
          onChange={(e) => {
            updateSection(index, "details", e.target.value, sectionName);
          }}
        ></Textarea>
      </section>
    </>
  );
}
