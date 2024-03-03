import Image from "next/image";

const why = [
    {
      title: "Swift 40-minute average response time for mobile tyre fitting across the UK.",
      image: "/images/whyus/why.svg",
      alt: "Mobile tyre fitting",
    },
    {
        title: "Most affordable prices for mobile tyre fitting with premium quality tyres.",
        image: "/images/whyus/why.svg",
        alt: "Emergency mobile tyre fitting",
      },
      {
        title: "Saves you a trip to the garage.",
        image: "/images/whyus/why.svg",
        alt: "Same day tyre fitting",
      },
      {
        title: "Our expert mobile tyre fitters provide services with a focus on safety and quality.",
        image: "/images/whyus/why.svg",
        alt: "Tyre Service",
      },
      {
        title: "Available 24/7 to assist with tyre emergencies at any time.",
        image: "/images/whyus/why.svg",
        alt: "Tyre Repair",
      },
  ];

export function Whyus() {
  return (
    <div className='text-center'>
    <div className='text-4xl font-bold m-3'>
        <h1>Why Choose Us?</h1>
    </div>

    <div>
    <div>
    {why.map(({ title, image, alt }, index) => (
  <div key={title}>
    <div className={`flex justify-center items-center ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
      <div className="text-lg text-center m-2 font-mono px-4">{title}</div>
    </div>
  </div>
))}

      </div>
    </div>
    </div>
  )
}
