import getReviews from './util/getReviews';
import format from './util/format';
import chalk from 'chalk';

function fido(config, page = 1, fromDate = null) {
  for (let cfg of config) {
    console.log(`fetching reviews for ${cfg.name}...\n`);
    getReviews(cfg.countries, page, cfg.podcastId).then(data => {
      console.log(chalk.bold.black(`** ${cfg.name} **`));
      console.log(format(data, fromDate));
    });
  }
}

export default fido;
