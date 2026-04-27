const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Screenshot Stepwise
  await page.goto('https://zhihe-pan.github.io/stepwise-demo/#/login', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'public/image/screenshot-stepwise.png', fullPage: false, clip: { x: 0, y: 0, width: 1440, height: 900 } });
  console.log('Stepwise screenshot done');
  
  // Screenshot CareerFlow
  await page.goto('https://zhihe-pan.github.io/career-flow/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'public/image/screenshot-careerflow.png', fullPage: false, clip: { x: 0, y: 0, width: 1440, height: 900 } });
  console.log('CareerFlow screenshot done');
  
  // Screenshot GroupClaw
  await page.goto('https://zhihe-pan.github.io/groupclaw/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'public/image/screenshot-groupclaw.png', fullPage: false, clip: { x: 0, y: 0, width: 1440, height: 900 } });
  console.log('GroupClaw screenshot done');
  
  await browser.close();
})();
