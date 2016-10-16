/**
 * Entry point for the server
 */
import * as path from 'path';
import * as http from 'http';

import { KoaApp } from './KoaApp';

process.on('uncaughtException', (err) => {
  console.log('errr?', err);
});

async function setupApp() {
  try {
    const app = new KoaApp();
    await app.initialize();
    const server = http.createServer(app.app.callback());

    /**
     * Listen on provided port, on all network interfaces.
     * Port is set per the .env file, and falls back on port 9000
     */
    const port: Number = process.env.PORT || 9000;
    server.listen(port);
  } catch (ex) {
    throw ex;
  }
}

setupApp();
