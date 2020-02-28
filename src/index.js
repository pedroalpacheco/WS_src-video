const puppeteer = require('puppeteer');



(async() =>{
  const browser = await puppeteer.launch({
    executablePath: '/opt/google/chrome/chrome',
    //headless:false
  });
  const page = await browser.newPage();
  await page.goto('https://www.animesvision.com.br/animes/boku-no-hero-academia-4/episodio-01/legendado');
  await page.waitFor('div[class="jw-top jw-reset"]');
 
  await page.keyboard.press(String.fromCharCode(13));

  let video = await page.$eval('video[class="jw-video jw-reset"]', el => el.getAttribute('src'));
  
  console.log(video);
  await browser.close();
})()

