export default function Input({ label, placeholder, type, onChange }) {
  return (
    <div className="form-control col-span-1 w-full">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full"
        onChange={onChange}
      />
    </div>
  );
}
