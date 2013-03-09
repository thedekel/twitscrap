var util = require('util'),
    twitter = require("twitter");

var twit = new twitter(
    {
      consumer_key: "dfMiuHrVvkFeJyJbhSsNKA",
      consumer_secret: "MYVCl8HbJOFilLLm7sn8qZ0aJNyj5AR5YL2Hz9IBZOk",
      access_token_key: "60379780-M53g2CK66IMDXoDCPIxJzR8V3WbUteT32YXCvtOTH",
      access_token_secret: "AJyPGqKcBGYMvekS2bHxlOkVixKvBvQm89AEy5kK5E"
    });

twit.stream('statuses/firehose', function(stream){
  stream.on('data', function(data){
    console.log(util.inspect(data));
  });
});
