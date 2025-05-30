export async function fetchVillas() {
  const res = await fetch("/api/villas");
  if (!res.ok) {
    throw new Error("Failed to fetch villas data");
  }
  return res.json();
}
