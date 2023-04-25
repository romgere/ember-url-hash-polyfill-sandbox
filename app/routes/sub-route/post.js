import Route from '@ember/routing/route';

export default class SubRoutePostRoute extends Route {
  model() {
    return new Promise(function (resolve) {
      setTimeout(resolve, 5000);
    });
  }
}
