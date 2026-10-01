import logo from "@/assets/image.png.asset.json";
import oneJz from "@/assets/1jz.webp.asset.json";
import twoJz from "@/assets/2jz.PNG.asset.json";
import kidsMeal from "@/assets/Kids_meal.webp.asset.json";
import onionRings from "@/assets/Onions_rings.webp.asset.json";
import rb25 from "@/assets/Rb25.webp.asset.json";
import rb26 from "@/assets/Rb_26.PNG.asset.json";
import singleFries from "@/assets/Single_fries.webp.asset.json";
import turboFries from "@/assets/Turbo_fries.webp.asset.json";
import water from "@/assets/Water.webp.asset.json";

export type Locale = "en" | "ar";
export type Category = "beef" | "chicken" | "sides" | "drinks" | "kids";
export type MenuItem = {
  id: string;
  category: Category;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  image: string;
  sandwich?: number;
  meal?: number;
  price?: number;
};

export const restaurant = {
  name: "ODA BURGER",
  nameAr: "أودا برقر",
  tagline: "Every Bite, a Legend.",
  phoneDisplay: "+973 3390 3421",
  phone: "+97333903421",
  whatsapp: "97333903421",
  location: "https://share.google/hiuK4ljIoac2TCoC5",
  instagram: "https://www.instagram.com/oda_burge.s/",
  instagramHandle: "@oda_burge.s",
  openingHours: null as string | null,
  logo: logo.url,
};

export const menuItems: MenuItem[] = [
  { id: "2jz", category: "beef", name: "2JZ", nameAr: "2JZ", image: twoJz.url, sandwich: 1.8, meal: 2.4, description: "A beef patty served with caramelized onions, cheese, lettuce and special sauce.", descriptionAr: "برغر لحم يقدم مع البصل المكرمل، الجبن، والخس وصوص خاص." },
  { id: "1jz", category: "beef", name: "1JZ", nameAr: "1JZ", image: oneJz.url, sandwich: 1.9, meal: 2.5, description: "A beef patty served with roasted mushrooms, cheese and our special sauce.", descriptionAr: "برغر لحم يقدم مع الفطر المشوي، الجبن وصوص خاص." },
  { id: "rb26", category: "chicken", name: "RB26", nameAr: "RB26", image: rb26.url, sandwich: 1.8, meal: 2.4, description: "Crispy chicken served with coleslaw, cheese and our special sauce.", descriptionAr: "دجاج مقرمش تقدم مع سلطة الكولسلو والجبن وصوص خاص." },
  { id: "rb25", category: "chicken", name: "RB25", nameAr: "RB25", image: rb25.url, sandwich: 1.6, meal: 2.3, description: "A delicious crispy chicken patty served with sliced onions, tomatoes, cheese and mayo.", descriptionAr: "دجاج مقرمش تقدم مع شرائح البصل، طماطم، جبن ومايونيز." },
  { id: "single-fries", category: "sides", name: "Single Fries", nameAr: "بطاطا سنجل", image: singleFries.url, price: 1.2, description: "Fries topped with cheddar cheese, special sauce and spices.", descriptionAr: "بطاطا مغطاة بجبن الشيدر والصوص الخاص والبهارات." },
  { id: "turbo-potatoes", category: "sides", name: "Turbo Potatoes", nameAr: "بطاطا توربو", image: turboFries.url, price: 1.6, description: "Fries topped with minced meat, special sauce and jalapeños.", descriptionAr: "بطاطا مغطاة باللحم المفروم والصوص الخاص والهالبينو." },
  { id: "chicken-strips", category: "sides", name: "Chicken Strips", nameAr: "شرائح دجاج", image: rb25.url, price: 1.7, description: "Crispy chicken strips with ODA's signature spices with a side sauce.", descriptionAr: "شرائح دجاج مقرمشة ببهارات أودا الخاصة مع صوص جانبي." },
  { id: "onion-rings", category: "sides", name: "Onion Rings", nameAr: "حلقات بصل", image: onionRings.url, price: 0.6, description: "Crispy onion rings.", descriptionAr: "حلقات بصل مقرمشة." },
  { id: "soft-drink", category: "drinks", name: "Soft Drink", nameAr: "مشروب غازي", image: kidsMeal.url, price: 0.3, description: "Chilled soft drink.", descriptionAr: "مشروب غازي بارد." },
  { id: "water", category: "drinks", name: "Water", nameAr: "ماء", image: water.url, price: 0.2, description: "Chilled bottled water.", descriptionAr: "مياه معبأة باردة." },
  { id: "kids-meal", category: "kids", name: "Kids Meal", nameAr: "وجبة أطفال", image: kidsMeal.url, price: 1.4, description: "4 piece chicken nuggets, fries, juice and toy.", descriptionAr: "٤ قطع ناجتس دجاج، بطاطا، عصير ولعبة." },
];

export const categoryLabels: Record<Category, { en: string; ar: string }> = {
  beef: { en: "Beef Burgers", ar: "برغر اللحم" }, chicken: { en: "Chicken Burgers", ar: "برغر الدجاج" }, sides: { en: "Side Dishes", ar: "الأطباق الجانبية" }, drinks: { en: "Drinks", ar: "المشروبات" }, kids: { en: "Kids Meal", ar: "وجبة الأطفال" },
};

export const favorites = ["2jz", "rb26", "single-fries", "kids-meal"];
