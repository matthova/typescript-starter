/**
 * The Koa app
 */
import * as Koa from 'koa';
import * as bluebird from 'bluebird';

const KoaApp = class KoaApp {
  public app
  constructor() {
    this.app = new Koa();
  }

  public async initialize() {
    this.app.use(async ctx => {
      await bluebird.delay(1000);
      ctx.body = 'Hello Koa';
    });
  }
}

export { KoaApp };
