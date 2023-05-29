export default function Button({
  className = "btn btn-outline btn-primary",
  label,
  onClick,
}) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}
