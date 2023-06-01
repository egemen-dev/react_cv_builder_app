export default function Button({
  className = "btn btn-outline btn-primary col-span-full flex-grow",
  label,
  onClick,
}) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}
