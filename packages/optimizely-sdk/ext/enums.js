const NOTIFICATION_TYPES = require('@optimizely/js-sdk-utils').NOTIFICATION_TYPES

const JAVASCRIPT_CLIENT_ENGINE = 'javascript-sdk'
const NODE_CLIENT_ENGINE = 'node-sdk'
const REACT_CLIENT_ENGINE = 'react-sdk'
const REACT_NATIVE_CLIENT_ENGINE = 'react-native-sdk'
const REACT_NATIVE_JS_CLIENT_ENGINE = 'react-native-js-sdk'

const allEmptyString = new Proxy({}, { get: () => '%s; %s; %s' });

module.exports = {
  LOG_LEVEL: {
    NOTSET: 0,
    DEBUG: 1,
    INFO: 2,
    WARNING: 3,
    ERROR: 4
  },

  ERROR_MESSAGES: allEmptyString,

  LOG_MESSAGES: allEmptyString,

  RESERVED_EVENT_KEYWORDS: {
    REVENUE: 'revenue',
    VALUE: 'value'
  },

  CONTROL_ATTRIBUTES: {
    BOT_FILTERING: '$opt_bot_filtering',
    BUCKETING_ID: '$opt_bucketing_id',
    STICKY_BUCKETING_KEY: '$opt_experiment_bucket_map',
    USER_AGENT: '$opt_user_agent'
  },

  JAVASCRIPT_CLIENT_ENGINE,
  NODE_CLIENT_ENGINE,
  REACT_CLIENT_ENGINE,
  REACT_NATIVE_CLIENT_ENGINE,
  REACT_NATIVE_JS_CLIENT_ENGINE,
  NODE_CLIENT_VERSION: '3.6.0-alpha.1',

  VALID_CLIENT_ENGINES: [
    NODE_CLIENT_ENGINE,
    REACT_CLIENT_ENGINE,
    JAVASCRIPT_CLIENT_ENGINE,
    REACT_NATIVE_CLIENT_ENGINE,
    REACT_NATIVE_JS_CLIENT_ENGINE,
  ],

  NOTIFICATION_TYPES,

  DECISION_NOTIFICATION_TYPES: {
    AB_TEST: 'ab-test',
    FEATURE: 'feature',
    FEATURE_TEST: 'feature-test',
    FEATURE_VARIABLE: 'feature-variable'
  },

  DECISION_SOURCES: {
    FEATURE_TEST: 'feature-test',
    ROLLOUT: 'rollout'
  },

  FEATURE_VARIABLE_TYPES: {
    BOOLEAN: 'boolean',
    DOUBLE: 'double',
    INTEGER: 'integer',
    STRING: 'string'
  },

  DATAFILE_VERSIONS: {
    V2: '2',
    V3: '3',
    V4: '4'
  }
}