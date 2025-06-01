export async function fetchSchedule() {
  const res = await fetch("/api/schedule");
  if (!res.ok) throw new Error("Failed to fetch schedule");
  return res.json();
}
