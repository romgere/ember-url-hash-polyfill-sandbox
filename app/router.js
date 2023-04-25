import EmberRouter from '@ember/routing/router';
import config from 'ember-url-hash-polyfill-sandbox/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
