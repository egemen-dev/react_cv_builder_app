import Button from "./Button";
import Input from "./Input";

export default function BulletPoints({
  sectionName,
  index,
  setBulletPoints,
  bulletPoints,
  update,
}) {
  function updateSectionWithBulletPoints(newBulletPoints) {
    setBulletPoints(newBulletPoints);
    update(sectionName, index, "bulletPoints", newBulletPoints);
  }

  function updateCurrentBulletPoint(value, bulletPointIndex) {
    const newBulletPoints = [...bulletPoints];
    newBulletPoints[bulletPointIndex] = value;
    updateSectionWithBulletPoints(newBulletPoints);
  }

  function addBulletPoint() {
    const newBulletPoints = [...bulletPoints];
    newBulletPoints.push("");
    updateSectionWithBulletPoints(newBulletPoints);
  }

  function removeBulletPoint() {
    const newBulletPoints = [...bulletPoints];
    newBulletPoints.pop();
    updateSectionWithBulletPoints(newBulletPoints);
  }

  return (
    <>
      {bulletPoints &&
        bulletPoints.map((bulletPoint, bulletPointIndex) => (
          <Input
            index={bulletPointIndex}
            onChange={(e) => {
              updateCurrentBulletPoint(e.target.value, bulletPointIndex);
            }}
          />
        ))}
      <div className="flex flex-row gap-2 justify-end py-8">
        <Button
          label="Remove Point"
          className="btn btn-outline btn-error flex-grow"
          onClick={() => {
            removeBulletPoint();
          }}
        />
        <Button
          label="Add Point"
          className="btn btn-outline btn-accent flex-grow"
          onClick={() => {
            addBulletPoint();
          }}
        />
      </div>
    </>
  );
}
