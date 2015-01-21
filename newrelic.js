/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {

  /**
   * Array of application names.
   */
  app_name: ['Segment'],

  /**
   * Your New Relic license key.
   */
  license_key: '3b27fea0ee497bbeb501cab516c9599f25fe942d',

  logging: {

    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level: 'trace'
  }

};
