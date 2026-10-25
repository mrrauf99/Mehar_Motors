const image = (filename) => `/images/${filename}.webp`;

export const vehicles = [
  {
    id: "mercedes-benz-s-class",
    name: "Mercedes-Benz S-Class",
    category: "Executive sedan",
    bodyStyle: "sedan",
    image: image("mercedes-s-class"),
    alt: "Mercedes-Benz S-Class sedan",
    sampleDailyRatePKR: 68000
  },
  {
    id: "mercedes-maybach-s-class",
    name: "Mercedes-Maybach S-Class",
    category: "Luxury sedan",
    bodyStyle: "sedan",
    image: image("mercedes-maybach-s-class"),
    alt: "Mercedes-Maybach S-Class sedan",
    sampleDailyRatePKR: 112000
  },
  {
    id: "land-rover-defender",
    name: "Land Rover Defender",
    category: "SUV",
    bodyStyle: "suv",
    image: image("land-rover-defender"),
    alt: "Land Rover Defender SUV",
    sampleDailyRatePKR: 56000
  },
  {
    id: "bmw-i8",
    name: "BMW i8",
    category: "Sports coupe",
    bodyStyle: "coupe",
    image: image("bmw-i8"),
    alt: "BMW i8 coupe",
    sampleDailyRatePKR: 88000
  },
  {
    id: "honda-civic",
    name: "Honda Civic",
    category: "Sedan",
    bodyStyle: "sedan",
    image: image("honda-civic"),
    alt: "Honda Civic sedan",
    sampleDailyRatePKR: 20000
  },
  {
    id: "hyundai-sonata",
    name: "Hyundai Sonata",
    category: "Sedan",
    bodyStyle: "sedan",
    image: image("hyundai-sonata"),
    alt: "Hyundai Sonata sedan",
    sampleDailyRatePKR: 28000
  },
  {
    id: "range-rover",
    name: "Range Rover",
    category: "Luxury SUV",
    bodyStyle: "suv",
    image: image("range-rover"),
    alt: "Range Rover SUV",
    sampleDailyRatePKR: 76000
  },
  {
    id: "toyota-prado",
    name: "Toyota Prado",
    category: "SUV",
    bodyStyle: "suv",
    image: image("toyota-prado"),
    alt: "Toyota Prado SUV",
    sampleDailyRatePKR: 60000
  },
  {
    id: "toyota-land-cruiser",
    name: "Toyota Land Cruiser",
    category: "SUV",
    bodyStyle: "suv",
    image: image("toyota-land-cruiser"),
    alt: "Toyota Land Cruiser SUV",
    sampleDailyRatePKR: 80000
  },
  {
    id: "toyota-fortuner",
    name: "Toyota Fortuner",
    category: "SUV",
    bodyStyle: "suv",
    image: image("toyota-fortuner"),
    alt: "Toyota Fortuner SUV",
    sampleDailyRatePKR: 48000
  }
];
