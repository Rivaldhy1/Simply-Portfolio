export const Button = ({ className, icon, children, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <span className="flex items-center justify-center">
        {children} {icon && <span className="pl-2">{icon ? icon : ""}</span>}
      </span>
    </button>
  );
};
