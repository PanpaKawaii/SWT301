const assert = require('assert');
const resemble = require('resemblejs');
const fs = require('fs');
//npx codeceptjs run --steps
Feature('Visual Testing for HOME PAGE');

Scenario('Comparing', async ({ I }) => {
  // Home Page
  I.amOnPage('http://localhost:5173/');

  // Screen Size
  // await I.resizeWindow(1920, 1080);

  // Screen Shot
  await I.saveScreenshot('ScreenShot.png');

  // Reference image
  const referenceImage = './reference_images/test.png';

  // Screen shot image
  const currentImage = './output/ScreenShot.png';

  // Comparing
  await new Promise((resolve) => {
    resemble(referenceImage)
      .compareTo(currentImage)
      .ignoreColors()
      .onComplete(data => {
        // Save the diff image
        const diffImage = data.getBuffer();
        fs.writeFileSync('./output/diff.png', diffImage);

        // Comparing the different
        assert.ok(data.rawMisMatchPercentage < 1, `Different Image Percentage: ${data.rawMisMatchPercentage}%`);
        resolve();
      });
  });
});
