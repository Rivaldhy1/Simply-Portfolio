export const Button = ({ style, icon, children }) => {
  return (
    <button className={`${style} h-12 rounded-lg text-[#3D3D3D]`}>
      <span className="flex items-center justify-center">
        {children} {icon && <span className="pl-2">{icon ? icon : ""}</span>}
      </span>
    </button>
  );
};
