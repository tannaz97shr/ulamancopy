export async function fetchTestimonials() {
  const res = await fetch("/api/testimonials");
  if (!res.ok) throw new Error("Failed to fetch testimonials");
  return res.json();
}
