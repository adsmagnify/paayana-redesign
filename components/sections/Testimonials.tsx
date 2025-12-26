// Placeholder testimonials - in production, these would come from Sanity
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Mumbai",
    text: "Payaana made our dream trip come true! The attention to detail and personalized service was exceptional.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi",
    text: "Amazing experience from start to finish. Highly recommend Payaana for your next adventure!",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Sharma",
    location: "Bangalore",
    text: "The best travel experience we&apos;ve ever had. Everything was perfectly organized and the destinations were breathtaking.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            What Our Travelers Say
          </h2>
          <p className="text-gray-600 text-lg">
            Don&apos;t just take our word for it - hear from our happy travelers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 mb-4 italic">
                &quot;{testimonial.text}&quot;
              </p>

              <div>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
