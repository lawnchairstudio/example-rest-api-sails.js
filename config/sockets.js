/**
 * WebSocket Server Settings
 * (sails.config.sockets)
 *
 * These settings provide transparent access to the options for Sails'
 * encapsulated WebSocket server, as well as some additional Sails-specific
 * configuration layered on top.
 *
 * For more information on sockets configuration, including advanced config options, see:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.sockets.html
 */

module.exports.sockets = {

  /** 
   * @function onConnect
   * @summary This function will be run each time after a new socket connects.
   * @description This function will be run each time after a new socket
   * connect. To control whether a socket is allowed to connect, check out
   * `authorization` config. Keep in mind that Sails' RESTful simulation for
   * sockets mixes in socket.io events for your routes and blueprints
   * automatically.
   * @param session
   * @param socket
   */
  onConnect: function (session, socket) {

  },

  /**
   * @function onDisconnect
   * @description This custom onDisconnect function will be run each time a socket
   * disconnects.
   * @param session
   * @param socket
   */
  onDisconnect: function (session, socket) {

  },

  /***************************************************************************
  *                                                                          *
  * `transports`                                                             *
  *                                                                          *
  * A array of allowed transport methods which the clients will try to use.  *
  * The flashsocket transport is disabled by default You can enable          *
  * flashsockets by adding 'flashsocket' to this list:                       *
  *                                                                          *
  ***************************************************************************/
  // transports: [
  //   'websocket',
  //   'htmlfile',
  //   'xhr-polling',
  //   'jsonp-polling'
  // ],

  /**
  * Use this option to set the datastore socket.io will use to manage
  * rooms/sockets/subscriptions.
  * default: 'redis'
  */
  adapter: 'redis', // or 'memory'
  host: process.env.REDISTOGO_HOST || '127.0.0.1',
  port: process.env.REDISTOGO_PORT || 6379,
  db: process.env.REDISTOGO_DATABASE || 0,
  pass: process.env.REDISTOGO_PASSWORD || '',
  prefix: 'sess:'

  /***************************************************************************
  *                                                                          *
  * `authorization`                                                          *
  *                                                                          *
  * Global authorization for Socket.IO access, this is called when the       *
  * initial handshake is performed with the server.                          *
  *                                                                          *
  * By default (`authorization: false`), when a socket tries to connect,     *
  * Sails allows it, every time. If no valid cookie was sent, a temporary    *
  * session will be created for the connecting socket.                       *
  *                                                                          *
  * If `authorization: true`, before allowing a connection, Sails verifies   *
  * that a valid cookie was sent with the upgrade request. If the cookie     *
  * doesn't match any known user session, a new user session is created for  *
  * it. (In most cases, the user would already have a cookie since they      *
  * loaded the socket.io client and the initial HTML page.)                  *
  *                                                                          *
  * However, in the case of cross-domain requests, it is possible to receive *
  * a connection upgrade request WITHOUT A COOKIE (for certain transports)   *
  * In this case, there is no way to keep track of the requesting user       *
  * between requests, since there is no identifying information to link      *
  * him/her with a session. The sails.io.js client solves this by connecting *
  * to a CORS endpoint first to get a 3rd party cookie (fortunately this     *
  * works, even in Safari), then opening the connection.                     *
  *                                                                          *
  * You can also pass along a ?cookie query parameter to the upgrade url,    *
  * which Sails will use in the absense of a proper cookie e.g. (when        *
  * connection from the client):                                             *
  * io.connect('http://localhost:1337?cookie=smokeybear')                    *
  *                                                                          *
  * (Un)fortunately, the user's cookie is (should!) not accessible in        *
  * client-side js. Using HTTP-only cookies is crucial for your app's        *
  * security. Primarily because of this situation, as well as a handful of   *
  * other advanced use cases, Sails allows you to override the authorization *
  * behavior with your own custom logic by specifying a function, e.g:       *
  *                                                                          *
  *    authorization: function authSocketConnectionAttempt(reqObj, cb) {     *
  *                                                                          *
  *        // Any data saved in `handshake` is available in subsequent       *
  *        requests from this as `req.socket.handshake.*`                    *
  *                                                                          *
  *        // to allow the connection, call `cb(null, true)`                 *
  *        // to prevent the connection, call `cb(null, false)`              *
  *        // to report an error, call `cb(err)`                             *
  *     }                                                                    *
  *                                                                          *
  ***************************************************************************/

  // authorization: false,

  /***************************************************************************
  *                                                                          *
  * Whether to run code which supports legacy usage for connected sockets    *
  * running the v0.9 version of the socket client SDK (i.e. sails.io.js).    *
  * Disabled in newly generated projects, but enabled as an implicit default *
  * (i.e. legacy usage/v0.9 clients be supported if this property is set to  *
  * true, but also if it is removed from this configuration file or set to   *
  * `undefined`)                                                             *
  *                                                                          *
  ***************************************************************************/

  // 'backwardsCompatibilityFor0.9SocketClients': false,

  /***************************************************************************
  *                                                                          *
  * Whether to expose a 'get /__getcookie' route with CORS support that sets *
  * a cookie (this is used by the sails.io.js socket client to get access to *
  * a 3rd party cookie and to enable sessions).                              *
  *                                                                          *
  * Warning: Currently in this scenario, CORS settings apply to interpreted  *
  * requests sent via a socket.io connection that used this cookie to        *
  * connect, even for non-browser clients! (e.g. iOS apps, toasters, node.js *
  * unit tests)                                                              *
  *                                                                          *
  ***************************************************************************/

  // grant3rdPartyCookie: true,

  /***************************************************************************
  *                                                                          *
  * Match string representing the origins that are allowed to connect to the *
  * Socket.IO server                                                         *
  *                                                                          *
  ***************************************************************************/

  // origins: '*:*',

};
