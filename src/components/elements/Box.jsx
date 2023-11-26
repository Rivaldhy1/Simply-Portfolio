export const Box = ({ url, src, alt }) => {
  return (
    <div className="box-content">
      <a href={url}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-fill rounded-xl"
        />
      </a>
    </div>
  );
};
