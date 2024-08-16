import React from "react";

export function GalleryBrinds({ images, onClose }) {
  const [active, setActive] = React.useState(images[0].imgelink);
  const [caption, setCaption] = React.useState(images[0].caption);

  return (
    <div className="relative mt-3">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-sky-700 text-white py-2 px-4 rounded-full z-50"
      >
        Fechar
      </button>
      <div className="relative">
        <img
          className="w-full max-w-full max-h-[540px] rounded-lg object-contain"
          src={active}
          alt="Featured"
        />
        {caption && (
          <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-50 text-white text-center py-2 rounded-b-lg">
            {caption}
          </div>
        )}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4">
        {images.map(({ imgelink, caption }, index) => (
          <div key={index} className="relative">
            <img
              onClick={() => {
                setActive(imgelink);
                setCaption(caption); // Atualiza a legenda ao clicar
              }}
              src={imgelink}
              className="w-[540px] h-auto cursor-pointer rounded-lg object-contain"
              alt={`gallery-image-${index}`}


            />
            {caption && (
              <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-50 text-white text-center py-1 rounded-b-lg text-xs">
                {caption}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
