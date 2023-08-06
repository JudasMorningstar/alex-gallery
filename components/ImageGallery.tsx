"use client";
import React, { ReactComponentElement, ReactNode, useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

type Props = {
  slide: string;
  index: any;
};

function ImageGallery({ galleryImages }: any) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = ({ index }: Props) => {
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
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div>
      {openModal && (
        <div>
          {/* exit button */}
          <button
            onClick={() => handleCloseModal()}
            className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
          {/* left arrow */}
          <button
            className="absolute left-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
            style={{ transform: "translate3d(0, 0, 0)" }}
            onClick={prevSlide}
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          {/* right arrow */}
          <button
            className="absolute right-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
            style={{ transform: "translate3d(0, 0, 0)" }}
            onClick={nextSlide}
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
          <div className="fullScreenImage">
            <img src={galleryImages[slideNumber]} alt="" />
          </div>
        </div>
      )}

      <div className="galleryWrap">
        {galleryImages &&
          galleryImages.map(({ slide }: Props, { index }: Props) => {
            return (
              <div
                className=""
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide} alt="" />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ImageGallery;
