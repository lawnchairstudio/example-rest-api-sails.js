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

module.exports.connections = {

  /**
   * Local disk storage for development.
   */
  localDiskDb: {
    adapter: 'sails-disk'
  },

  /**
   * MongoDB database for production
   */
  productionMongo: {
    adapter: 'sails-mongo',
    url: process.env.MONGOLAB_URI
  },

  /**
   * Redis database for production
   */
  productionRedis: {
    adapter: 'sails-redis',
    port: process.env.REDISTOGO_PORT,
    host: process.env.REDISTOGO_HOST,
    password: process.env.REDISTOGO_PASSWORD,
    database: process.env.REDISTOGO_DATABASE,
    options: {
      parser: 'hiredis',
      return_buffers: false,
      detect_buffers: false,
      socket_nodelay: true,
      no_ready_check: false,
      enable_offline_queue: true
    }
  }

};
