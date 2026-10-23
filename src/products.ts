/**
 * Catalogue data only: edit names, images, indicative packs and MOQs here.
 * Confirm actual availability and commercial terms before publishing.
 */
export type CategoryId = "all" | "walnuts" | "almonds" | "honey";
export type ProductCategory = Exclude<CategoryId, "all">;

export interface Product {
  id: string;
  category: ProductCategory;
  categoryLabel: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  packSizes: string;
  moq: string;
  badge?: string;
}

export const categories: { id: CategoryId; label: string }[] = [
  { id: "all", label: "All products" },
  { id: "walnuts", label: "Walnuts" },
  { id: "almonds", label: "Almonds" },
  { id: "honey", label: "Honey" },
];

// The first three products form the featured selection on the catalogue landing view.
export const products: Product[] = [
  {
    id: "walnut-light-halves",
    category: "walnuts",
    categoryLabel: "Kashmiri Walnuts",
    name: "Walnut Kernels (Light Halves)",
    description:
      "Delicate, golden halves with a naturally rich crunch. A fine choice for gifting, retail and premium kitchens.",
    image: "/images/walnut.jpg",
    imageAlt: "Natural walnut kernels with their textured shells",
    packSizes: "25 kg / 50 kg bags",
    moq: "25 kg",
    badge: "Premium grade",
  },
  {
    id: "almond-premium",
    category: "almonds",
    categoryLabel: "Kashmiri Almonds",
    name: "Almond Kernels (Premium)",
    description:
      "Carefully selected kernels with a full, nutty flavour. Made for discerning retailers and food businesses.",
    image: "/images/almond.jpg",
    imageAlt: "Whole natural almonds ready for bulk packing",
    packSizes: "25 kg / 50 kg bags",
    moq: "25 kg",
    badge: "Premium grade",
  },
  {
    id: "honey-acacia",
    category: "honey",
    categoryLabel: "Kashmiri Honey",
    name: "Acacia Honey",
    description:
      "Light, floral and beautifully mellow. A versatile honey for specialty retail, hospitality and private labels.",
    image: "/images/honey.jpg",
    imageAlt: "Golden honey with a wooden honey dipper",
    packSizes: "5 kg / 20 kg drums",
    moq: "20 kg",
    badge: "Valley favourite",
  },
  {
    id: "walnut-in-shell",
    category: "walnuts",
    categoryLabel: "Kashmiri Walnuts",
    name: "In-Shell Walnuts",
    description:
      "Naturally protected in their shells, with the hearty flavour of the valley. Suitable for retail and seasonal gifting.",
    image: "/images/walnut.jpg",
    imageAlt: "Walnuts and walnut kernels showing their natural texture",
    packSizes: "25 kg / 50 kg bags",
    moq: "25 kg",
  },
  {
    id: "walnut-pieces",
    category: "walnuts",
    categoryLabel: "Kashmiri Walnuts",
    name: "Walnut Kernels (Broken / Pieces)",
    description:
      "The same satisfying walnut flavour in practical pieces. Ideal for bakeries, confectionery and ingredient supply.",
    image: "/images/walnut.jpg",
    imageAlt: "Walnut kernels for bakery and ingredient supply",
    packSizes: "25 kg / 50 kg bags",
    moq: "25 kg",
  },
  {
    id: "almond-kagzi",
    category: "almonds",
    categoryLabel: "Kashmiri Almonds",
    name: "Kagzi Almonds (In-Shell)",
    description:
      "Traditional thin-shell almonds with a distinctive natural taste. A classic addition to a Kashmiri dry fruit range.",
    image: "/images/almond.jpg",
    imageAlt: "Almonds representing the Kagzi in-shell almond range",
    packSizes: "25 kg / 50 kg bags",
    moq: "25 kg",
  },
  {
    id: "almond-standard",
    category: "almonds",
    categoryLabel: "Kashmiri Almonds",
    name: "Almond Kernels (Standard)",
    description:
      "An everyday grade for food preparation, blending and value-focused retail. Ask us for the current lot specification.",
    image: "/images/almond.jpg",
    imageAlt: "Natural almond kernels for wholesale ingredient supply",
    packSizes: "25 kg / 50 kg bags",
    moq: "25 kg",
  },
  {
    id: "honey-multiflora",
    category: "honey",
    categoryLabel: "Kashmiri Honey",
    name: "Multiflora Honey",
    description:
      "A rounded floral character inspired by varied valley blossoms. For everyday retail, hospitality and food service.",
    image: "/images/honey.jpg",
    imageAlt: "Golden honey representing the multiflora honey range",
    packSizes: "5 kg / 20 kg drums",
    moq: "20 kg",
  },
  {
    id: "honey-raw-forest",
    category: "honey",
    categoryLabel: "Kashmiri Honey",
    name: "Raw Forest Honey",
    description:
      "A deeper, bolder honey for buyers seeking a distinctive profile. Request available harvest and handling details.",
    image: "/images/honey.jpg",
    imageAlt: "Honey representing the raw forest honey range",
    packSizes: "5 kg / 20 kg drums",
    moq: "20 kg",
  },
];
