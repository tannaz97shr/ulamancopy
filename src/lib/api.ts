export async function fetchSiteData(baseUrl: string) {
  try {
    const res = await fetch(`${baseUrl}/api/data`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error("Failed to fetch");

    return res.json();
  } catch (error) {
    console.error("API Fetch Error:", error);
    throw error;
  }
}
