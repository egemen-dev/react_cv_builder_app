export default function Input({ index = 0, label, placeholder, type, onChange }) {
  return (
    <div
      key={index}
      className={
        "form-control col-span-1 w-full border-b-2 border-gray-200 dark:border-gray-600 p-0.5 "
      }
    >
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="input w-full"
        onChange={onChange}
      />
    </div>
  );
}
