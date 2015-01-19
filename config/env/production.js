/**
 * Production environment settings 
 */
module.exports = {
  port: process.env.PORT || 80,
  environment: 'production',
  models: {
    connection: 'productionMongoDB'
  },
  log: {
    level: 'silent'
  }
};
