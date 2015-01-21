/**
 * sails.config.connections
 *
 * `Connections` are like "saved settings" for your adapters.  What's the difference between
 * a connection and an adapter, you might ask?  An adapter (e.g. `sails-mysql`) is generic--
 * it needs some additional information to work (e.g. your database host, password, user, etc.)
 * A `connection` is that additional information.
 *
 * Each model must have a `connection` property (a string) which is references the name of one
 * of these connections.  If it doesn't, the default `connection` configured in `config/models.js`
 * will be applied.  Of course, a connection can (and usually is) shared by multiple models.
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.connections.html
 */

var mongolab = 'mongodb://dev:dev@ds031751.mongolab.com:31751/segment';

module.exports.connections = {

  /**
   * MongoDB database for local development.
   */
  'local': {
    adapter: 'sails-mongo',
    url: mongolab
  },

  /**
   * MongoDB database for production environment.
   */
  'production': {
    adapter: 'sails-mongo',
    url: process.env.MONGOLAB_URI || mongolab
  },

  /**
   * MongoDB database for development environment.
   */
  'development': {
    adapter: 'sails-mongo',
    url: process.env.MONGOLAB_URI || mongolab
  }

};
