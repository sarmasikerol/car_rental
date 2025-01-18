import { CarType } from "../../types";
import Button from "../button";
import Info from "./Info";

type Props = {
  car: CarType;
};

const Card = ({ car }: Props) => {
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
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
