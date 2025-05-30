type Props = {
  heading: string;
  content: string;
};

export default function About({ heading, content }: Props) {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-4">{heading}</h2>
      <p className="max-w-2xl mx-auto text-gray-700">{content}</p>
    </section>
  );
}
