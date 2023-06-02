import CvHeader from "./preview/Header";
import Section from "./preview/Section";

export default function PreviewSection({
  name,
  mail,
  phone,
  website,
  educations,
  works,
  skills,
}) {
  return (
    <>
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
        <div className="flex flex-col gap-3 py-4">
          <p>{skills}</p>
        </div>
      </section>
    </>
  );
}
