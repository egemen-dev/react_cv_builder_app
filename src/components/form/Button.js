export default function Button({
  className = "btn btn-outline btn-primary col-span-full",
  label,
  onClick,
}) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}
