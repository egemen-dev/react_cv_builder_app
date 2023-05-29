import Input from "./Input";
import Textarea from "./Textarea";

export default function WorkInputSection({ index, setWorkSections, workSections }) {
  function updateWorkSections(index, key, value) {
    const newWorkSections = [...workSections];
    newWorkSections[index][key] = value;
    setWorkSections(newWorkSections);
  }

  return (
    <section className="col-span-2 grid grid-cols-2 gap-3 work">
      <Input
        label="Company name"
        placeholder="Google"
        onChange={(e) => {
          updateWorkSections(index, "title", e.target.value);
        }}
      />
      <Input
        label="Position title"
        placeholder="Software Engineer"
        onChange={(e) => {
          updateWorkSections(index, "subTitle", e.target.value);
        }}
      />
      <Input
        label="From"
        type="date"
        onChange={(e) => {
          updateWorkSections(index, "from", e.target.value);
        }}
      />
      <Input
        label="Until"
        type="date"
        onChange={(e) => {
          updateWorkSections(index, "until", e.target.value);
        }}
      />
      <Textarea
        label="Main tasks"
        placeholder="Developing software"
        onChange={(e) => {
          updateWorkSections(index, "details", e.target.value);
        }}
      ></Textarea>
    </section>
  );
}
