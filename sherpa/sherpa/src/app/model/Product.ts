// http://json2ts.com/

export interface Meta {
  name: string;
  text: string;
  productShortName: string;
}

export interface Price {
  currency: string;
  value: number;
}

export interface Image {
  width: number;
  contentType: string;
  title: string;
  type: string;
  size: number;
  position: number;
  height: number;
  fileName: string;
  url: string;
}

export interface Price2 {
  value: number;
  currency: string;
}

export interface Pricebreakdown {
  price: Price2;
  type: string;
}

export interface Product {
  meta: Meta;
  price: Price;
  images: Image[];
  processingWindow: string;
  eerType: string;
  createdAt: Date;
  type: string;
  validityStart: string[];
  validity: string[];
  attributes: string[];
  productId: string;
  numberOfEntries: string[];
  lengthOfStay: string[];
  pricebreakdown: Pricebreakdown[];
  destinations: string[];
  hasVariants: boolean;
  nationalities: string[];
  processingTime: string[];
  travelPurpose: string[];
  programId: string;
}
