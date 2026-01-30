import { test, expect } from "@playwright/test";
test("Convert a short daily greeting phrase unsupported chat shorthand", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("suba udhaeesanak veevaa!");
  const outputText = page.getByText("සුබ උදෑසනක් වේවා!");

  await expect(outputText).toBeVisible();
});

test("Interrogative and imperative forms", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("oyaalaa kaaladha innee?");
  const outputText = page.getByText("ඔයාලා කාලද ඉන්නේ?");

  await expect(outputText).toBeVisible();
});

test("Complex sentence", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("Oya enavaanam mama balan innavaa.");
  const outputText = page.getByText("ඔය එනවානම් මම බලන් ඉන්නවා.");

  await expect(outputText).toBeVisible();
});

test("Sinhala output updates automatically in real-time", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("mama kadeeta yanavaa");
  const outputText = page.getByText("මම කඩේට යනවා");

  await expect(outputText).toBeVisible();
});

test("Interrogative (questions) forms", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("Mata udhavvak karanna puLuvandha?");
  const outputText = page.getByText("මට උදව්වක් කරන්න පුළුවන්ද?");

  await expect(outputText).toBeVisible();
});

test("Frequently used expressions", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("Api passee kathaa karamu");
  const outputText = page.getByText("අපි පස්සේ කතා කරමු");

  await expect(outputText).toBeVisible();
});

test("Polite phrasing", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("karuNaakaralaa oyaagee nama kiyanna puLuvandha?");
  const outputText = page.getByText("කරුණාකරලා ඔයාගේ නම කියන්න පුළුවන්ද?");

  await expect(outputText).toBeVisible();
});

test("Informal phrasing", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("oyaa boodimata ennee kavadhdha?");
  const outputText = page.getByText("ඔයා බෝඩිමට එන්නේ කවද්ද?");

  await expect(outputText).toBeVisible();
});

test("Multi-word expressions", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("Hariyata vaeda karanna");
  const outputText = page.getByText("හරියට වැඩ කරන්න");

  await expect(outputText).toBeVisible();
});

test("Repeated word emphasis", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("Hari hari ithin");
  const outputText = page.getByText("හරි හරි ඉතින්");

  await expect(outputText).toBeVisible();
});

test("Responses", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("Hari, mama eeka karannam.");
  const outputText = page.getByText("හරි, මම ඒක කරන්නම්.");

  await expect(outputText).toBeVisible();
});

test("Negative sentence", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("Mama hithannee naehae.");
  const outputText = page.getByText("මම හිතන්නේ නැහැ.");

  await expect(outputText).toBeVisible();
});

test("Positive sentence", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("Mama hithanavaa oyaata eeka karanna puLuvan kiyalaa.");
  const outputText = page.getByText("මම හිතනවා ඔයාට ඒක කරන්න පුළුවන් කියලා.");

  await expect(outputText).toBeVisible();
});

test("Tense variations", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("Mama giya sathiyee gedhara giyaa.");
  const outputText = page.getByText("මම ගිය සතියේ ගෙදර ගියා.");

  await expect(outputText).toBeVisible();
});

test("Mixed English/places", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("Mata kandy naetum class ekak thiyenavaa.");
  const outputText = page.getByText("මට kandy නැටුම් class එකක් තියෙනවා.");

  await expect(outputText).toBeVisible();
});

test("Singular/pluralusage and pronoun variations", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("api dhavalta kanna yamudha?");
  const outputText = page.getByText("අපි දවල්ට කන්න යමුද?");

  await expect(outputText).toBeVisible();
});

test("English abbreviations and short forms", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("QR code eka scan karanna");
  const outputText = page.getByText("QR code එක scan කරන්න");

  await expect(outputText).toBeVisible();
});

test("Negation patterns", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("mama oovaa dhanne naee");
  const outputText = page.getByText("මම ඕවා දන්නෙ නෑ");

  await expect(outputText).toBeVisible();
});

test(" Currency, time formats, dates, and units of measurement", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("Rs.5000k Nayata dhenna naedhdha?");
  const outputText = page.getByText("Rs.5000ක් ණයට දෙන්න නැද්ද?");

  await expect(outputText).toBeVisible();
});

test("Multiple spaces, line breaks, and paragraph inputs", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("mama  heta yaaluvekgee gedhara yanavaa");
  const outputText = page.getByText("මම  හෙට යාලුවෙක්ගේ ගෙදර යනවා");

  await expect(outputText).toBeVisible();
});

test("Slang and colloquial phrasing", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("adoo eeka supiriyak!!!");
  const outputText = page.getByText("අඩෝ ඒක සුපිරියක්!!!");

  await expect(outputText).toBeVisible();
});

test("Sentences containing places and common English words that should remain as they are", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("Mata oyaagee photo ekak WhatsApp karanna puluvandha?");
  const outputText = page.getByText("මට ඔයාගේ photo එකක් WhatsApp කරන්න පුලුවන්ද?");

  await expect(outputText).toBeVisible();
});

test("Joined vs segmented word variations (with/without spaces)", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("api maeyi siriipaadhee yanavaa");
  const outputText = page.getByText("අපි මැයි සිරීපාදේ යනවා");

  await expect(outputText).toBeVisible();
});

test("Paragraph-style input (medium/long)", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const inputBox = page.getByRole("textbox", {
    name: "Input Your Singlish Text Here.",
  });
  await inputBox.fill("dhivayina puraa pavathvana kRIidaa uthsava maalaavehi dhevana adhiyara rathnapura siivalii kRIdaaQQganayeedhi saarthakava avasan vuu athara, In aeloosiyas kandaayam kRIdakayan ranna padhakkam 5k dhinana ladhii. mEe piLibadhava adhahas dhaekvuu kRIidaa amaathYA bimal rathnaayaka pavasaa sitiyee nava kRIidakayanta nava thaakShaNika puhuNuva labaa dhIimaata kriyaamaarga sakas karana bavayi.");
  const outputText = page.getByText("දිවයින පුරා පවත්වන ක්‍රීඩා උත්සව මාලාවෙහි දෙවන අදියර රත්නපුර සීවලී ක්‍රිඩාංගනයේදි සාර්තකව අවසන් වූ අතර, ඉන් ඇලෝසියස් කන්ඩායම් ක්‍රිඩකයන් රන්න පදක්කම් 5ක් දිනන ලදී. මේ පිළිබදව අදහස් දැක්වූ ක්‍රීඩා අමාත්‍ය බිමල් රත්නායක පවසා සිටියේ නව ක්‍රීඩකයන්ට නව තාක්ෂණික පුහුණුව ලබා දීමාට ක්‍රියාමාර්ග සකස් කරන බවයි.");

  await expect(outputText).toBeVisible();
});



