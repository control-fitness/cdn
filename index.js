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
const corsOptions = {
  origin: '*',
  methods: 'GET',
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
