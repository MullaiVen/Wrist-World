export enum ProductCategory {
  Watches = "watches",
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  description: string;
  cover: string;
  coverCredits: string;
  category: ProductCategory;
}

export const products: Product[] = [
  {
    id: 32,
    name: "SEIKO SNE589",
    slug: "seiko-sne589",
    price: 42000,
    description:
      "The SNE589 solar dive watch has a 42.8mm brushed and polished stainless steel case with a matte black dial.",
    cover: "/products/1.jpg",
    coverCredits:
      "",
    category: ProductCategory.Watches,
  },
  {
    id: 18,
    name: "Rolex President Day Date",
    slug: "rolex-president-day-date",
    price: 99000,
    description:
      "Champagne dial with raised gold baton hour markers. Sweep centre seconds. Outer minute and 1/2 seconds divisions, aperture for day at 12, aperture for date at 3..",
    cover: "/products/2.jpg",
    coverCredits:
      "",
    category: ProductCategory.Watches,
  },
  {
    id: 21,
    name: "G-SHOCK GWG-B1000",
    slug: "g-shock-gwg-b1000",
    price: 59999,
    description:
      "G-SHOCK Connected with auto time adjustment adn easy watch settings, Approximately 300 world time cities, time & places. It also has watch status display, self check and phone finder..",
    cover: "/products/3.webp",
    coverCredits:
      "",
    category: ProductCategory.Watches,
  },

  {
    id: 49,
    name: "JAEGER-LECOULTRE",
    slug: "jaeger-lecoultre",
    price: 80000,
    description:
      "Master Ultra Thin Small Seconds series, the small seconds sub-dial is fixed at the 6 o’clock marker whereas, the Ultra Thin Date series has a date window at the 6 o’clock position.",
    cover: "/products/4.jpg",
    coverCredits:
      "",
    category: ProductCategory.Watches,
  },
];

export function formatPrice(price: number): string {
  return price.toLocaleString('en-US');
}