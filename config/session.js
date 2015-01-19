/**
 * Session Configuration
 * (sails.config.session)
 *
 * Sails session integration leans heavily on the great work already done by
 * Express, but also unifies Socket.io with the Connect session store. It uses
 * Connect's cookie parser to normalize configuration differences between Express
 * and Socket.io and hooks into Sails' middleware interpreter to allow you to access
 * and auto-save to `req.session` with Socket.io the same way you would with Express.
 *
 * For more information on configuring the session, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.session.html
 */
module.exports.session = {

  /**                                                                         
   * Session secret is automatically generated when your new app is created
   * Replace at your own risk in production-- you will invalidate the cookies
   * of your users, forcing them to log in again.
   */
  secret: '64f48a4f146ee7becb2fdc6447f16a86',

  /**
   * Set the session cookie expire time The maxAge is set by milliseconds.
   *
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  }*/

  /**                                        
  * In production, uncomment the following lines to set up a shared redis
  * session store that can be shared across multiple Sails.js servers  
  * Read more about options at: https://github.com/visionmedia/connect-redis 
  */
  adapter: 'redis',
  host: process.env.REDISTOGO_HOST || '127.0.0.1',
  port: process.env.REDISTOGO_PORT || 6379,
  db: process.env.REDISTOGO_DATABASE || 'segment',
  pass: process.env.REDISTOGO_PASSWORD ||,
  prefix: 'sess:'

};
