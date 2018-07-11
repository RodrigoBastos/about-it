var Twit = require('twit');
var Q = require('q');
var keys = require('./../../twitterKeys.json');

var T = Twit(keys);

exports.search = function (query) {
  return Q.Promise(function (resolve, reject) {
    T.get('search/tweets', { q: '"Hand Talk" OR "Libras" OR "" since:2018-07-01', count: 10, lang: 'pt', result_type: 'recent' }, function(err, data, response) {
      var posts = [];
      
      posts = data.statuses.map(function (post) {
        return { 
          text: post.text,
          id: post.id_str,
          username: post.user.screen_name,
          name: post.user.name
        };
      });
      return resolve(posts);
    });
  });
};