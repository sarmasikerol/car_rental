import { CarType } from "../types";

const options = {
  headers: {
    "x-rapidapi-key": "5a56265c38msh86935356e173491p129c35jsn6beefb15f6db",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

// Asenkron fonksiyonların return tipinde doğrudan fonksiyonun return ettiği veriyi yazamayız. Fonksiyonların hata döndürme ihtimalini de göze alarak ts'in içersinde bulunan Promise tipine return verimiz generic olarak gönderilmeli
export const fetchCars = async (): Promise<CarType[]> => {
  try {
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=BMW&model=m4`;

    const res = await fetch(url, options);

    const data = await res.json();

    console.log(data);

    return data;
  } catch (error) {
    throw new Error("Verileri alırken sorun oluştu");
  }
};
