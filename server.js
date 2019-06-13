const vision = require('@google-cloud/vision');
const express = require('express');
const multer = require('multer');
const fileUpload = require('express-fileupload');
const client = new vision.ImageAnnotatorClient();
const app = express();
app.use(fileUpload());

app.post('/upload', function(req, res) {
    console.log(req);
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
  
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('filename.jpg', function(err) {
    if (err)
      return res.status(500).send(err);
      client
      .documentTextDetection('filename.jpg')
      .then(results => {
        const fullTextAnnotation = results[0].fullTextAnnotation
        console.log(`Full text: ${fullTextAnnotation.text}`);
        res.send(`${fullTextAnnotation.text}`);
      })
      .catch(err => {
        console.error('ERROR:', err);
      });
//    res.send('File uploaded!');
  });
});
app.listen(3000, () => console.log('Server started on port 3000'));
