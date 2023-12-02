export const Box = ({ url, src, alt }) => {
  return (
    <div className="box-content">
      <a href={url}>
        <img
          src={src}
          alt={alt}
          className="transform transition-all ease-in-out hover:scale-110 w-full h-full xs:max-sm:object-cover md:object-fill rounded-xl"
        />
      </a>
    </div>
  );
};
