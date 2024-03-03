import Image from "next/image";

const services = [
  {
    title: "24/7 Mobile Tyre Fitting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit laudantium",
    image: "/images/services/1.svg",
    alt: "Service description",
  },
  {
    title: "Vehicle Recovery",
    description:
      "Nemo quos doloribus quo omnis mollitia nostrum excepturi impedit veniam ",
    image: "/images/services/2.svg",
    alt: "Service description",
  },
  {
    title: "Mobile Tyre Repair",
    description:
      "Accusantium eius omnis minus debitis est odio earum labore ad itaque mollitia",
    image: "/images/services/3.svg",
    alt: "Service description",
  },
  {
    title: "Mobile Mechanic ",
    description:
      "Dolores nemo labore soluta incidunt cumque repellat quod ducimus explicabo",
    image: "/images/services/4.svg",
    alt: "Service description",
  },
];
export function Services() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
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
            <p className="pt-2 text-base text-center dark:text-neutral-400">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
