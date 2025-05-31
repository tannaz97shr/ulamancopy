export async function fetchPackages() {
  const res = await fetch("/api/packages");
  if (!res.ok) {
    throw new Error("Failed to fetch packages data");
  }
  return res.json();
}
