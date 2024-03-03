import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export function Testimonial() {
  const testimonials = [
    {
      quote:
        "I was stuck on the motorway with a flat tyre, feeling quite stressed about the situation. I called Azanate emergency mobile tyre fitting service, and they were incredible! They arrived quickly, had me back on the road in no time, and to my surprise, the price was the best I've found. Truly a lifesaver",
      name: "Micheal Gough",
      title: "London",
    },
    {
      quote:
        "When I found myself stranded with a tyre issue, I wasn't sure what to do next. Thankfully, I reached out to this team, and they were nothing short of amazing. Not only did they offer a very competitive price, but their friendliness and efficiency made a stressful situation much easier. Highly recommend!",
      name: "Alex B.",
      title: "Manchester",
    },
    {
      quote:
        "I never thought getting a tyre replaced could be such a hassle-free experience until I needed help on a busy day. This 24 hour mobile tyre fitting service came to my rescue. Their team was super friendly, the service was fast, and the price was unbeatable. I'm definitely keeping their number for any future tyre troubles!",
      name: "John Smith",
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
    <section className="bg-white mt-6 mb-12">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <h2 className="text-3xl text-gray-900 mb-8 font-semibold tracking-wide uppercase">
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
                  <div className="">
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

