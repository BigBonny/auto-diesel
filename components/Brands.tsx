const brands = [
  { name: "Renault",     img: "/brands/renault.svg" },
  { name: "Peugeot",    img: "/brands/peugeot.svg" },
  { name: "Citroën",    img: "/brands/citroen.svg" },
  { name: "Audi",       img: "/brands/audi.svg" },
  { name: "BMW",        img: "/brands/bmw.svg" },
  { name: "Volkswagen", img: "/brands/volkswagen.svg" },
  { name: "Toyota",     img: "/brands/toyota.svg" },
  { name: "Ford",       img: "/brands/ford.svg" },
  { name: "Porsche",    img: "/brands/porsche.svg" },
  { name: "Volvo",      img: "/brands/volvo.svg" },
  { name: "Opel",       img: "/brands/opel.svg" },
];

const doubled = [...brands, ...brands];

export default function Brands() {
  return (
    <div className="py-5 bg-white border-y border-gray-100 overflow-hidden" id="brands">
      <div className="flex items-center gap-4 px-6 mb-4">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">Top des marques</span>
        <div className="flex-1 h-px bg-gray-100" />
      </div>

      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]">
        <div className="animate-marquee">
          {doubled.map((brand, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-2 mx-10 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"
              style={{ minWidth: "90px" }}
            >
              <img
                  src={brand.img}
                  alt={brand.name}
                  className="h-10 w-auto max-w-[80px] object-contain transition-all duration-300"
                  style={{ filter: "grayscale(1) contrast(1.2)" }}
                />
              <span className="text-[10px] font-semibold text-gray-400 whitespace-nowrap">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
