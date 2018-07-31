'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _ = _interopDefault(require('lodash'));
var Redis = _interopDefault(require('ioredis'));

function lift() {
  let config = _.get(this.config, 'connections.redis', {});

  if (config.cluster) {
    this.redis = new Redis.Cluster(config);
  } else {
    this.redis = new Redis(config);
  }

  return null;
}

module.exports = lift;
//# sourceMappingURL=bundle.cjs.js.map
