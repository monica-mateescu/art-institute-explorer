import type { GalleryType } from "../types";

export const getFromStorage = () => {
  const storedData = localStorage.getItem("gallery");
  return storedData ? JSON.parse(storedData) : [];
};

export const saveToStorage = (data: GalleryType) => {
  const storedData = getFromStorage();
  const updatedData = [...storedData, data];
  return localStorage.setItem("gallery", JSON.stringify(updatedData));
};

export const existsInStorage = (id: number): boolean => {
  const storedData = getFromStorage();

  return storedData.find((item: GalleryType) => item.id === id);
};

export const removeFromStorage = (id: number) => {
  const storedData = getFromStorage();
  const updatedData = storedData.filter((item: GalleryType) => item.id !== id);

  localStorage.setItem("gallery", JSON.stringify(updatedData));
};
