import { useState } from "react";
import { CarType } from "../../types";
import Button from "../button";
import Info from "./Info";
import Modal from "../modal";

type Props = {
  car: CarType;
};

const Card = ({ car }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);

    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setIsOpen(false);

    document.body.style.overflow = "auto";
  };

  return (
    <div className="car-card">
      {/* araba ismi */}
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>

      {/* araba fiyatı */}
      <div className="flex mt-6 text-[19px]">
        <span className="font-semibold">₺</span>
        <span className="text-[32px]">
          {Math.round(Math.random() * 7000) + 1500}
        </span>
        <span className="font-semibold self-end">/gün</span>
      </div>

      {/* resim alanı */}
      <div className="w-full">
        <img src="/hero.png" className="w-full h-full object-contain" alt="" />
      </div>

      {/* alt kısım */}
      <div className="w-full">
        <div className="group-hover:hidden">
          <Info car={car} />
        </div>

        <div className="mt-[4px]  group-hover:flex">
          <Button
            desings="w-full py-[25px] text-white"
            title="Daha fazla"
            icon="right-arrow.svg"
            handleClick={handleOpen}
          />
        </div>
      </div>

      <Modal isOpen={isOpen} close={handleClose} car={car} />
    </div>
  );
};

export default Card;
