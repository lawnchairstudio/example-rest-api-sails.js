/**
 * Production environment settings 
 */
module.exports = {
  port: process.env.PORT || 80,
  environment: process.env.NODE_ENV || 'production',
  models: {
    connection: 'production'
  },
  log: {
    level: 'silent'
  }
};
