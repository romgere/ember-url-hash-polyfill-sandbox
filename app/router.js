import EmberRouter from '@ember/routing/router';
import config from 'ember-url-hash-polyfill-sandbox/config/environment';
import { withHashSupport } from 'ember-url-hash-polyfill';

@withHashSupport
export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('sub-route', function () {
    this.route('post');
  });
});
