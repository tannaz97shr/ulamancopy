export async function fetchMapPoints() {
  const res = await fetch("/api/map");

  if (!res.ok) {
    throw new Error("Failed to fetch map data");
  }

  return res.json();
}
