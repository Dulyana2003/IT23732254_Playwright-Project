import { test, expect } from "@playwright/test";
test("Chat shorthand", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("Thx bokka");
  const outputText = page.getByText("තෑන්ක්ස් බොක්ක");

  await expect(outputText).toBeVisible();
});

test("Multiline input", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("mama gedhara\\nyanavaa");
  const outputText = page.getByText("මම ගෙදර යනවා");

  await expect(outputText).toBeVisible();
});

test("Mixed English abbreviations", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("meeting eka ASAP evanna");
  const outputText = page.getByText("meeting එක ASAP එවන්න");

  await expect(outputText).toBeVisible();
});

test("Slang heavy input", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("adoo bn eka hariyata karapan");
  const outputText = page.getByText("අඩෝ බන් එක හරියට කරපන්");

  await expect(outputText).toBeVisible();
});

test("Symbols in sentence", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("mama @ gedhara # yanavaa !!");
  const outputText = page.getByText("මම @ ගෙදර # යනවා !!");

  await expect(outputText).toBeVisible();
});

test("Numbers and dates", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("api 3 denek 25/12/2025 yamu");
  const outputText = page.getByText("අපි 3 දෙනෙක් 25/12/2025 යමු");

  await expect(outputText).toBeVisible();
});

test("Typographical errors", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("mammaa geddhara yannava");
  const outputText = page.getByText("මම ගෙදර යනවා");

  await expect(outputText).toBeVisible();
});

test("Numbers and special characters", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("mata oonee 123\oyaata!!??!!");
  const outputText = page.getByText("මට ඕනේ 123\ඔයාට!!??!!");

  await expect(outputText).toBeVisible();
});

test("Only special characters", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("$$$###@@@");
  const outputText = page.getByText("$$$###@@@");

  await expect(outputText).toBeVisible();
});

test("Unsupported foreign characters", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("你好こんにちは");
  const outputText = page.getByText("你好こんにちは");

  await expect(outputText).toBeVisible();
});