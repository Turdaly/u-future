export {};

declare global {
  namespace Types {
    type Country = {
      name: CountryName;
      independent: boolean;
      region: string;
      flags: {
        png: string;
        svg: string;
        alt: string;
        [key: string]: string;
      };
      languages: {
        [key: string]: string;
      };
    };
    type CountryName = {
      common: string;
      official: string;
      nativeName: {
        [languageCode: string]: {
          official: string;
          common: string;
        };
      };
    };

    type Region = {
      text: string;
      key: string;
      icon: string;
    };
  }
}
