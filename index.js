const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

/**
 * Helmet can help protect your app from some well-known web vulnerabilities
 * by setting HTTP headers appropriately.
 *
 * https://expressjs.com/en/advanced/best-practice-security.html
 * @type {[type]}
 */
app.use(helmet());

/**
 * CORS is a node.js package for providing a Connect/Express middleware
 * that can be used to enable CORS with various options.
 *
 * https://www.npmjs.com/package/cors
 * @type {[type]}
 */
const whitelist = [
  'http://*.control.fitness',
  'https://*.control.fitness',
  'http://localhost:8080',
];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
};
app.use(cors(corsOptions));

/**
 * To serve static files such as images, CSS files, and JavaScript files,
 * use the express.static built-in middleware function in Express.
 *
 * https://expressjs.com/en/starter/static-files.html
 * @type {[type]}
 */
app.use(express.static('public'));

// Redirect to website
app.get('/', (req, res) => res.redirect('https://www.control.fitness/'));

// start server
app.listen(port, () => console.log(`Listen on port ${port}`));
