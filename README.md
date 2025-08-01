A simple Node.js command-line application that:

Accepts a URL from the user

Generates a QR code image for that URL

Saves the URL in a .txt file for record-keeping

🔧 Technologies Used
Node.js (JavaScript runtime)

Inquirer – to collect user input via CLI

qr-image – to generate the QR code image

fs (File System) – to read/write local files

🚀 How It Works
User is prompted to enter a URL.

The app generates a QR code image (qr_image.png) using that URL.

The input URL is also saved to a text file (URL.txt).
