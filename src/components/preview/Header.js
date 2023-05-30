export default function CvHeader({ name, mail, phone, website }) {
  return (
    <section className="pb-5">
      <h1 id="name" className="flex justify-center w-full text-5xl pb-6">
        {name}
      </h1>
      <div className="flex gap-4 justify-center">
        <p>
          <a href={`mailto:${mail}`}>{mail}</a>
        </p>
        <p>{phone}</p>
        <a href={website}>{website}</a>
      </div>
    </section>
  );
}
