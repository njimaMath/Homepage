const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Load the HTML file
    await page.goto(`file:${path.join(__dirname, 'index.html')}`, {
      waitUntil: 'networkidle0'
    });

    // Generate PDF
    await page.pdf({
      path: 'output.pdf',
      format: 'A4',
      printBackground: true
    });

    await browser.close();
    console.log('PDF has been generated successfully!');
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
})();
