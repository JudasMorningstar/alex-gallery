"use client";
import React, { useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
interface ImageGalleryProps {
  images: string[];
}

function ImageGallery({ images }: ImageGalleryProps) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index: number) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(images.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === images.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div>
      {openModal && (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-black bg-opacity-80 flex items-center justify-center w-full h-full">
          {/* exit button */}
          <button
            onClick={() => handleCloseModal()}
            className="absolute right-[calc(12%)] top-[calc(12%)] flex rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-indigo-500 hover:text-white"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
          {/* left arrow */}
          <button
            className="absolute left-[calc(12%)] top-[calc(50%)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-indigo-500 hover:text-white focus:outline-none"
            style={{ transform: "translate3d(0, 0, 0)" }}
            onClick={prevSlide}
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          {/* right arrow */}
          <button
            className="absolute right-[calc(12%)] top-[calc(50%)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-indigo-500 hover:text-white focus:outline-none"
            style={{ transform: "translate3d(0, 0, 0)" }}
            onClick={nextSlide}
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
          <div className="w-[calc(100%-40px)] h-[calc(100%-40px)] flex items-center justify-center">
            <Image
              className="max-w-full max-h-full rounded-xl pointer-events-none select-none"
              src={images[slideNumber]}
              alt={`Image ${slideNumber + 1}`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
      )}

      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
        {images &&
          images.map((slide, index) => {
            return (
              <div
                className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <Image
                  className="transform rounded-lg brightness-80 transition will-change-auto hover:brightness-110 mb-4 pointer-events-none"
                  key={index}
                  src={slide}
                  alt={`Image ${index + 1}`}
                  width={720}
                  height={480}
                  sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ImageGallery;
