const vision = require('@google-cloud/vision');
const bodyParser = require('body-parser');
const multer = require('multer');

app.use(bodyParser.urlEncoded({extended: true}));

const app = express();

app.get('/', function(req, res) {
    res.json({ message: 'WELCOME' });   
});
 
app.listen(3000, () => console.log('Server started on port 3000'));

/*
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
    
    res.send('File uploaded!');
  });



*/
