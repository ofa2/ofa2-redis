import Redis from 'ioredis';

function lift() {
  this.config.redis = this.config.redis || {};

  if (this.config.redis.cluster) {
    this.redis = new Redis.Cluster(this.config.redis);
  } else {
    this.redis = new Redis(this.config.redis);
  }

  return null;
}

export default lift;
//# sourceMappingURL=bundle.esm.js.map
