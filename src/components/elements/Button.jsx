export const Button = ({ className, icon, children }) => {
  return (
    <button className={className}>
      <span className="flex items-center justify-center">
        {children} {icon && <span className="pl-2">{icon ? icon : ""}</span>}
      </span>
    </button>
  );
};
