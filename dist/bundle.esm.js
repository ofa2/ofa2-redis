import _ from 'lodash';
import Redis from 'ioredis';

function lift() {
  let config = _.get(this.config, 'connections.redis', {});

  if (config.cluster) {
    this.redis = new Redis.Cluster(config);
  } else {
    this.redis = new Redis(config);
  }

  return null;
}

export default lift;
//# sourceMappingURL=bundle.esm.js.map
