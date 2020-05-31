const Twit = require('twit');

const apiKey = '8PWV92GTVPpOlKEYSbbVxyRnh';
const apiSecretKey ='V13FVh9dXePyr7AMhCBz2I2pfB6ObogoB3uQfSJ5HHd36vyyCA';
const accessToken = '1266750782281408520-PQiVxRGpnHRrRCZ4jv2E1Gr0r1shfO';
const accessTokenSecret = '6Ho0xmKVh8aCI2wPKzDnCwKsMKM9nKuAXHr1nT4FwOBna';
//H2Ypd!CLVRzzyuW

let url = '';

var T = new Twit({
  consumer_key: apiKey,
  consumer_secret: apiSecretKey,
  access_token: accessToken,
  access_token_secret: accessTokenSecret,
});

function getTweet(req, response) {
  T.get('search/tweets', { q: '#tesla since:2020-04-15', count: 10 }, function(err, data, res) {
    const tweets = data.statuses;
    url = `twitter.com/user/status/${tweets[0].id_str}`;
    console.log(url);
    return response.send(url);
  })
}

module.exports = {
  getTweet,
}
