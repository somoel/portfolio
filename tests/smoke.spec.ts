import { expect, test } from "@playwright/test";

test("home exposes localized metadata, h1 and hreflang", async ({ page }) => {
  await page.goto("/es");

  await expect(page).toHaveTitle(/Desarrollador de software en Colombia/);

  const h1 = page.locator("h1");
  await expect(h1).toContainText("Samuel David Segura Vargas");
  await expect(h1).toContainText(/desarrollador de software en colombia/i);

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://samuelsegura.vercel.app/es",
  );

  const alternates = page.locator('link[rel="alternate"]');
  await expect(alternates).toHaveCount(3);
});

test("english home is localized", async ({ page }) => {
  await page.goto("/en");
  await expect(page).toHaveTitle(/Software Developer in Colombia/);
  await expect(page.locator("h1")).toContainText(
    /software developer in colombia/i,
  );
});

test("root negotiates locale from accept-language", async ({ request }) => {
  const response = await request.get("/", {
    maxRedirects: 0,
    headers: { "accept-language": "en-US,en;q=0.9" },
  });
  expect([307, 308]).toContain(response.status());
  expect(response.headers()["location"]).toContain("/en");
});

test("language switch navigates between locales", async ({ page }) => {
  await page.goto("/es");
  await page.getByLabel("Cambiar idioma").click();
  await expect(page).toHaveURL(/\/en$/);
});

test("cv page renders a printable resume", async ({ page }) => {
  await page.goto("/es/cv");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Samuel David Segura Vargas",
  );
  await expect(
    page.getByRole("button", { name: /Imprimir/ }).first(),
  ).toBeVisible();
});

test("sitemap and robots are served", async ({ request }) => {
  expect((await request.get("/sitemap.xml")).ok()).toBeTruthy();
  expect((await request.get("/robots.txt")).ok()).toBeTruthy();
});

test("no horizontal overflow on mobile", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/es");
  const width = await page.evaluate(() => ({
    scroll: document.documentElement.scrollWidth,
    client: document.documentElement.clientWidth,
  }));
  expect(width.scroll).toBeLessThanOrEqual(width.client);
});
