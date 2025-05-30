type Props = {
  title: string;
  subtitle: string;
  backgroundImage: string;
};

export default function Hero({ title, subtitle, backgroundImage }: Props) {
  return (
    <section
      className="h-[80vh] bg-cover bg-center flex items-center justify-center text-white text-center px-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-black bg-opacity-40 p-8 rounded-xl max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg">{subtitle}</p>
      </div>
    </section>
  );
}
