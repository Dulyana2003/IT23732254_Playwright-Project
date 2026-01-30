import { test, expect } from "@playwright/test";
test("UI Test – Real-time output updates while typing", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });

  await inputBox.type("mata kanna   oonee", { delay: 100 });

  const outputText = page.getByText("මට කන්න   ඕනේ");

  await expect(outputText).toBeVisible();
});