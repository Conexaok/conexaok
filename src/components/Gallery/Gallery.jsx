import React from "react";

const Gallery = ({ images, onClose }) => {
  const [active, setActive] = React.useState(images[0].imgelink);

  return (
    <div className="relative mt-3 grid gap-4">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 bg-sky-700 text-white py-2 px-4 rounded-full"
      >
        Fechar
      </button>
      <div className="flex justify-center">
        <img
          className="h-auto w-1/2 max-w-full rounded-lg object-cover object-center"
          src={active}
          alt="Featured"
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {images.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt={`gallery-image-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
