const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

async function generateQRCode(url, index) {
  try {
    // Ensure 'qr-codes' directory exists or create it
    const outputDirectory = path.join(__dirname, 'qr-codes');
    if (!fs.existsSync(outputDirectory)) {
      fs.mkdirSync(outputDirectory);
    }

    // Generate QR code SVG from the provided URL
    const svgString = await QRCode.toString(url, { type: 'svg' });

    // Format the index to be 3 digits
    const formattedIndex = String(index).padStart(3, '0');

    // Write the SVG string to the desired output file
    const outputPath = path.join(
      outputDirectory,
      `qr-code-${formattedIndex}.svg`
    );
    fs.writeFileSync(outputPath, svgString, 'utf8');

    console.log(`QR Code saved at: ${outputPath}`);
  } catch (error) {
    console.error('Failed to generate QR Code:', error);
  }
}

async function processLinks() {
  const fileStream = fs.createReadStream('links.csv');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let index = 1;
  for await (const line of rl) {
    await generateQRCode(line.trim(), index);
    index++;
  }
}

processLinks();
