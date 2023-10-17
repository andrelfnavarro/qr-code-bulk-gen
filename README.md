# QR Code Bulk Generator from CSV

## Description

This script provides a way to bulk generate QR codes from a list of links specified in a CSV file. The generated QR codes are saved as SVG files in a directory named `qr-codes`.

## Prerequisites

- Node.js installed on your system.

## Installation

1. Ensure you have the required Node.js packages by running:

   ```bash
   npm install
   ```

2. Place the script in your desired directory.

3. Prepare a CSV file named `links.csv` in the same directory as the script. Each line of this CSV file should contain a single link for which you want to generate a QR code.

## Usage

1. After setting up your `links.csv` file, run the script:

   ```bash
   node <name-of-the-script-file>.js
   ```

2. The script will read each link from the CSV file and generate a QR code for it. Each QR code will be saved as an SVG file in the `qr-codes` directory, which will be created if it doesn't exist.

3. The SVG files will be named in the format `qr-code-XXX.svg` where `XXX` is a three-digit index number corresponding to the link's position in the CSV file.

4. After each QR code is generated, the script will log the path where the SVG file was saved.

## Notes

- If there are any issues during QR code generation, the script will log an error message indicating the problem.

## Contributing

Please report any bugs or feature requests to the repository's issue tracker.

## License

This script is open-source. Feel free to use, modify, and distribute it as you see fit.

---

Remember to always backup important data before running scripts on your system and ensure you have the appropriate permissions.
# qr-code-bulk-gen
