import React from "react";

export function GalleryBrinds({ images, onClose }) {
  const [active, setActive] = React.useState(images[0].imgelink);

  return (
    <div className="relative mt-3 grid gap-4">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-full"
      >
        Fechar
      </button>
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
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
}
