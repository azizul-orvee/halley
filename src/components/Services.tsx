import Image from "next/image";

const services = [
  {
    title: "24/7 Mobile Tyre Fitting",
    image: "/images/services/1.svg",
    alt: "mobile tyre fitting",
  },
  {
    title: "Vehicle Recovery",
    description:
      "Nemo quos doloribus quo omnis mollitia nostrum excepturi impedit veniam ",
    image: "/images/services/2.svg",
    alt: "emergency tyre replacement",
  },
  {
    title: "Mobile Tyre Repair",
    image: "/images/services/3.svg",
    alt: "mobile tyre repair",
  },
  {
    title: "Mobile Mechanic ",
    image: "/images/services/4.svg",
    alt: "mobile tyre fitters",
  },
];
export function Services() {
  return (
    <div className="bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold">Our Services</h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        {services.map(({ title, description, image, alt }) => (
          <div key={title}>
            <div className={`h-32 w-32 flex justify-center mx-auto ${title === 'Mobile Tyre Repair' ? 'animate-spin' : ''}`}>
              <Image
                src={image}
                alt={alt}
                width={130}
                height={130}
                quality={75}
                sizes="100vw"
                priority
              />
            </div>
            <h2 className="font-bold text-lg text-center">{title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
