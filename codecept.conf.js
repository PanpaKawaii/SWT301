const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);
require("dotenv").config();
require("./heal");
// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: "https://kit-stem-hub-fe-customer.vercel.app",

      show: true,
    },
  },
  include: {
    I: "./steps_file.js",
  },
  name: "ai_test",
  ai: {
    request: async (messages) => {
      const OpenAI = require("openai");
      const openai = new OpenAI({ apiKey: process.env["OPENAI_API_KEY"] });

      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-0125",
        messages,
      });

      return completion?.choices[0]?.message?.content;
    },
  },
  plugins: {
    heal: {
      enabled: true,
    },
    allure: {
      enabled: true,
      require: "@codeceptjs/allure-legacy",
      outputDir: "./allure-results",
    },
  },
};
