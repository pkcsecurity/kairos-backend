const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient();

const fileName = "image2.png"

client
  .documentTextDetection(fileName)
  .then(results => {
    const fullTextAnnotation = results[0].fullTextAnnotation
    console.log(`Full text: ${fullTextAnnotation.text}`);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
