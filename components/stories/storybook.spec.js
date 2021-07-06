const config = {
    apiUrl: "http://localhost:4200",
    branchName: "develop",
    project: "c6aeeae7-64ef-4807-9c03-33fd01f49978",
    apiKey: "5WTVZ644QN4N6VHZAA0XNHHTWCJQ",
  };

const { chromium } = require("playwright");
const {
  PlaywrightVisualRegressionTracker,
} = require("@visual-regression-tracker/agent-playwright");

describe("Storybook example", () => {
  let browserType = chromium;
  let browser;
  let context;
  let page;
  let vrt;

  beforeAll(async () => {
    browser = await browserType.launch();
    context = await browser.newContext();
    page = await context.newPage();
    vrt = new PlaywrightVisualRegressionTracker(config, browserType);
  });

  afterAll(() => {
    browser.close();
  });
});

const storybookUrl = "http://localhost:9001/"

it("Header_default_view", async () => {
    const componentUrlParams =
      "?selectedKind=Header&selectedStory=default%20view&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel";

    await page.goto(storybookUrl + componentUrlParams);

    await vrt.track(page, "default header");
  });