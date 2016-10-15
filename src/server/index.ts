/**
 * Entry point for the server
 */
import * as bluebird from 'bluebird';
import * as express from 'express';

const app = express();
const startTime: Date = new Date();

app.get('/', async (req, res) => {
  await bluebird.delay(5000);
  res.send(`Hello World! Server last started at ${startTime}`);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
