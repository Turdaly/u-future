import { Region } from "./types";


export const REGION_ICONS = {
  all: "/public/regions/all.svg",
  eur: "/public/regions/europe.svg",
  asia: "/public/regions/asia.svg",
  africa: "/public/regions/africa.svg",
  amer: "/public/regions/america.svg",
  ocean: "/public/regions/australia.svg",
};

export const regions: Region[] = [
  { text: "All", key: "All", icon: REGION_ICONS.all },
  { text: "Europe", key: "Europe", icon: REGION_ICONS.eur },
  { text: "Asia", key: "Asia", icon: REGION_ICONS.asia },
  { text: "Africa", key: "Africa", icon: REGION_ICONS.africa },
  { text: "America", key: "Americas", icon: REGION_ICONS.amer },
  { text: "Australia and oceania", key: "Oceania", icon: REGION_ICONS.ocean },
];
