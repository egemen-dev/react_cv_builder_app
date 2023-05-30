export default function Section({ title, subTitle, details, from, until }) {
  return (
    <div className="flex flex-col pb-5 pt-2">
      <div className="flex justify-between">
        <p className="font-bold">{title}</p>
        <div className="flex gap-3">
          <p>{until}</p>
          <p>{from}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p>{subTitle}</p>
        <p>{details}</p>
      </div>
    </div>
  );
}
