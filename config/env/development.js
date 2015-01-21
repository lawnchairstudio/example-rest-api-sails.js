/**
 * Development environment settings 
 */
module.exports = {
  port: process.env.PORT || 80,
  environment: process.env.NODE_ENV || 'development',
  models: {
    connection: 'development'
  }
};
