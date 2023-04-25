import Application from 'ember-url-hash-polyfill-sandbox/app';
import config from 'ember-url-hash-polyfill-sandbox/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
