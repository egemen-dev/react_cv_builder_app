import Input from "./Input";
import Textarea from "./Textarea";

export default function EducationInputSection({
  index,
  setEducationSections,
  educationSections,
}) {
  function updateEducationSections(index, key, value) {
    const newEducationSections = [...educationSections];
    newEducationSections[index][key] = value;
    setEducationSections(newEducationSections);
  }

  return (
    <section className="col-span-2 grid grid-cols-2 gap-3 education">
      <Input
        label="School name"
        placeholder="Harvard"
        onChange={(e) => {
          updateEducationSections(index, "title", e.target.value);
        }}
      />
      <Input
        label="Title of study"
        placeholder="Computer Science"
        onChange={(e) => {
          updateEducationSections(index, "subTitle", e.target.value);
        }}
      />
      <Input
        label="From"
        type="date"
        onChange={(e) => {
          updateEducationSections(index, "from", e.target.value);
        }}
      />
      <Input
        label="Until"
        type="date"
        onChange={(e) => {
          updateEducationSections(index, "until", e.target.value);
        }}
      />

      <Textarea
        label="Main courses"
        placeholder="Introduction to Computer Science"
        onChange={(e) => {
          updateEducationSections(index, "details", e.target.value);
        }}
      ></Textarea>
    </section>
  );
}
