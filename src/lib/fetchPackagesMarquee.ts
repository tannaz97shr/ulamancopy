export async function fetchPackagesMarquee() {
  const res = await fetch("/api/packages-marquee");
  if (!res.ok) throw new Error("Failed to fetch packages marquee");
  return res.json();
}
