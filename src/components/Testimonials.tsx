type Testimonial = {
  name: string;
  review: string;
};

type Props = {
  items: Testimonial[];
};

export default function Testimonials({ items }: Props) {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-10">Testimonials</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {items.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm text-center"
          >
            <p className="text-gray-700 italic mb-4">“{testimonial.review}”</p>
            <p className="font-semibold text-gray-900">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
