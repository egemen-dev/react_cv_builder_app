export default function Input({
  index = 0,
  label,
  placeholder,
  type,
  onChange,
  className,
}) {
  return (
    <div key={index} className={className || "form-control col-span-1 w-full"}>
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
