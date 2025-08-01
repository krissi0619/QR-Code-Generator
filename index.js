import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
      message: "Type in your URL:",
      name: "URL"
    }
  ])
  .then((answers) => {
    const url = answers.URL; // ✅ Extract the URL

    // ✅ Generate QR code and save as PNG
    const qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));

    // ✅ Save URL to a text file
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The URL has been saved to URL.txt");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Cannot run the prompt in this environment.");
    } else {
      console.error("Something went wrong:", error);
    }
  });
