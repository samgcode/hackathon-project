const Twit = require('twit');

const apiKey = '8PWV92GTVPpOlKEYSbbVxyRnh';
const apiSecretKey ='V13FVh9dXePyr7AMhCBz2I2pfB6ObogoB3uQfSJ5HHd36vyyCA';
const accessToken = '1266750782281408520-PQiVxRGpnHRrRCZ4jv2E1Gr0r1shfO';
const accessTokenSecret = '6Ho0xmKVh8aCI2wPKzDnCwKsMKM9nKuAXHr1nT4FwOBna';

var T = new Twit({
  consumer_key: apiKey,
  consumer_secret: apiSecretKey,
  access_token: accessToken,
  access_token_secret: accessTokenSecret,
});

async function getTweet() {
  T.get('search/tweets', { q: '#tesla since:2020-04-15', count: 1 }, function(err, data, res) {
    const tweets = data;

    console.log(tweets);
  })
}

getTweet();
