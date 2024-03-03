import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export function Testimonial() {
  const testimonials = [
    {
      quote:
        "Stranded on the motorway with a flat tyre, I experienced prompt and exceptional service from Moon emergency mobile tyre fitting, which not only had me back on the road swiftly but also offered the best price I've encountered. Their service was truly a lifesaver in a stressful situation.",
      name: "Katherine Lee",
      title: "London",
    },
    {
      quote:
        "I was fortunate to contact this team, whose assistance was absolutely incredible. They provided not only an exceptionally competitive rate but also their efficiency and warmth greatly alleviated my stress. I highly recommend their services!",
      name: "Claire Jarvis",
      title: "Manchester",
    },
    {
      quote:
        "I didn't imagine that replacing a tyre could be so effortless until I found myself in need of assistance on a hectic day. The 24-hour mobile tyre fitting service was a lifesaver, offering swift, friendly service at an unbeatable price. Their contact is firmly saved for any tyre issues in the future!",
      name: "Maisie Bolt",
      title: "Birmingham",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <section className="bg-white mb-12">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <h2 className="text-4xl font-bold text-center mb-6">
            Testimonials
          </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <figure key={index}>
              <blockquote>
                <p className="text-xl rounded-full italic">
                  {testimonial.quote}
                </p>
              </blockquote>
              <figcaption className="">
                <div className="">
                  <div className="mt-2">
                    {testimonial.name}
                  </div>
                  <div className="">
                    {testimonial.title}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </Slider>
      </div>
    </section>
  );
};

