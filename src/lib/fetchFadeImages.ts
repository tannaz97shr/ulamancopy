export async function fetchFadeImages() {
  const res = await fetch("/api/fade-images");
  if (!res.ok) throw new Error("Failed to fetch fade images");
  return res.json();
}
