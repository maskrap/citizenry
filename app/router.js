import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('committees');
  this.route('committees2');
  this.route('house-subcommittees');
  this.route('senate-subcommittees');
});

export default Router;
