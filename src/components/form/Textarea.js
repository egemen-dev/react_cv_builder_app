export default function Textarea({ index, label, placeholder, onChange }) {
  return (
    <div key={index} className="form-control w-full col-span-2">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <textarea
        className="textarea textarea-bordered h-36"
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
