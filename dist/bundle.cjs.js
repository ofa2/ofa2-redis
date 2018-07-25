'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Redis = _interopDefault(require('ioredis'));

function lift() {
  this.config.redis = this.config.redis || {};

  if (this.config.redis.cluster) {
    this.redis = new Redis.Cluster(this.config.redis);
  } else {
    this.redis = new Redis(this.config.redis);
  }

  return null;
}

module.exports = lift;
//# sourceMappingURL=bundle.cjs.js.map
