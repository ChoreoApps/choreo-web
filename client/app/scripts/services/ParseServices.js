angular.module('ParseServices', [])
.factory('ParseSDK', function() {

  // pro-tip: swap these keys out for PROD keys automatically on deploy using grunt-replace
  Parse.initialize("oSTqi09K98dnrzBekSEPv3SH3pLG4mzDUg7BB92F", "2h20chQvEdFdOQREVqe141a9FxYXvZ3mnmGdfvAY");
  //Secret key: 88bca3f9c73863a34e6a0349a902d3d6
  // FACEBOOK init
  window.fbPromise.then(function() {

    Parse.FacebookUtils.init({

      // pro-tip: swap App ID out for PROD App ID automatically on deploy using grunt-replace
      appId: 337308366446159, // Facebook App ID
      channelUrl: 'http://brandid.github.io/parse-angular-demo/channel.html', // Channel File
      cookie: true, // enable cookies to allow Parse to access the session
      xfbml: true, // parse XFBML
      frictionlessRequests: true // recommended

    });

  });

});
