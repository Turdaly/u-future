export type Country = {
  name: CountryName;
  independent: boolean;
  region: string;
  flags: {
    png: string;
    svg: string;
    alt: string;
    [key: string]: string;
  };
  population: number;
  languages: {
    [key: string]: string;
  };
};
export type CountryName = {
  common: string;
  official: string;
  nativeName: {
    [languageCode: string]: {
      official: string;
      common: string;
    };
  };
};

