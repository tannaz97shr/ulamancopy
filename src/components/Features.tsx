type Feature = {
  title: string;
  description: string;
  image: string;
};

type Props = {
  items: Feature[];
};

export default function Features({ items }: Props) {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-10">Features</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {items.map((feature, index) => (
          <div key={index} className="w-full max-w-sm text-center">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-60 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
