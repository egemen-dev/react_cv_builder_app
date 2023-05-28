export default function Textarea({ label, placeholder }) {
  return (
    <div className="form-control w-full col-span-2">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <textarea
        className="textarea textarea-bordered h-36"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}
