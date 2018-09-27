const express = require('express');
const helmet = require('helmet');
const app = express();
const port = process.env.PORT || 3000;

/**
 * Helmet can help protect your app from some well-known web vulnerabilities
 * by setting HTTP headers appropriately.
 *
 * https://expressjs.com/en/advanced/best-practice-security.html
 * @type {[type]}
 */
app.use(helmet.cors({
  allowFrom: [
    'http://*.control.fitness',
    'http://localhost:8080'
  ],
  credentials: 'basic',
  maxAge: 86400000,
}));

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
