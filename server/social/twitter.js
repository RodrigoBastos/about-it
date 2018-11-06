var Twit = require('twit');
var Q = require('q');
var keys = require('./../../twitterKeys.json');

var T = Twit(keys);

exports.search = function (query) {
  return Q.Promise(function (resolve, reject) {
    T.get('search/tweets', { q: '"' + query + '" -filter:retweets since:2018-11-01', count: 15, lang: 'pt', result_type: 'recent' }, function(err, data, response) {
      var posts = [];

      if (data.statuses && data.statuses.length > 0) {
        posts = data.statuses.map(function (post) {
          return { 
            text: post.text,
            id: post.id_str,
            username: post.user.screen_name,
            name: post.user.name
          };
        });
      }
      
      return resolve(posts);
    });
  });
};