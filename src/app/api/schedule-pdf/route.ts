import puppeteer from "puppeteer";

export async function GET() {
  const html = `
    <html>
      <head>
        <style>
          body { font-family: sans-serif; }
          table { width: 100%; border-collapse: collapse; }
          th, td { border: 1px solid #aaa; padding: 8px; text-align: center; }
          th { background: #f0e6d2; }
        </style>
      </head>
      <body>
        <h2>Weekly Schedule</h2>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>8 AM</td><td>Yoga</td><td>Yoga</td><td>Yoga</td><td>Yoga</td><td>Yoga</td><td>Yoga</td><td>Yoga</td></tr>
            <tr><td>12 PM</td><td>Sound</td><td>Sound</td><td>Sound</td><td>Sound</td><td>Sound</td><td>Sound</td><td>Sound</td></tr>
            <tr><td>1 PM</td><td colspan="7"></td></tr>
            <tr><td>5 PM</td><td>Yin</td><td>Yin</td><td>Yin</td><td>Yin</td><td>Yin</td><td>Yin</td><td>Yin</td></tr>
          </tbody>
        </table>
      </body>
    </html>
  `;

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setContent(html);
  const pdfBuffer = await page.pdf({ format: "A4" });
  await browser.close();

  return new Response(pdfBuffer as BodyInit, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=weekly-schedule.pdf",
    },
  });
}
