import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class ApplicationController extends Controller {
  @service router;

  @action
  goToSubRoute() {
    console.log('initiate transition to /sub-route/post#title4');
    this.router.transitionTo('/sub-route/post#title4');
  }
}
