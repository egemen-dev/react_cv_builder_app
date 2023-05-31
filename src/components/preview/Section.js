export default function Section({ index, experience }) {
  return (
    <div key={index} className="flex flex-col pb-5 pt-2">
      <div className="flex justify-between">
        <p className="font-bold">{experience.title}</p>
        <div className="flex gap-3">
          <p>{experience.until}</p>
          <p>{experience.from}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p>{experience.subTitle}</p>
        <p>{experience.details}</p>
        {experience.bulletPoints.map((bulletPoint, bulletPointIndex) => (
          <div key={bulletPointIndex} className="flex gap-3">
            <p className="font-bold">•</p>
            <p>{bulletPoint}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
