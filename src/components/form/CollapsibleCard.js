export default function CollapsibleCard({ title, children, cols = "grid-cols-2" }) {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box shadow-md"
    >
      <div className="collapse-title text-xl font-medium">{title}</div>
      <input type="checkbox" />
      <div className={`collapse-content collapse-open grid ${cols} gap-6`}>
        {children}
      </div>
    </div>
  );
}
