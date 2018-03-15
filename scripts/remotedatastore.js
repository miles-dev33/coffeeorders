(function (window){
  'use-strict';
  var App = window.App || {};
  var $ = window.jQuery;


  function RemoteDataStore(url) {
    if(!url)
    {
      throw new Error("No remote URL supplied");
    }
    this.serveUrl = url;
  }

  RemoteDataStore.prototype.add = function (key, val){
    $.post(this.serveUrl, val, function (serverResponse){
        console.log(serverResponse);
    });
  };

  RemoteDataStore.prototype.getAll = function (cb) {
    $.get(this.serverUrl, function (serverResponse){
      console.log(serverResponse);
      cb(serverResponse);
    });
  };

  RemoteDataStore.prototype.get = function (key, cb) {
    $.get(this.serveUrl + '/' + key, function(serverResponse){
      console.log(serverResponse);
      cb(serverResponse);
    });
  };

  RemoteDataStore.prototype.remove = function (key){
    $.ajax(this.serveUrl + '/' + key, {
      type: "DELETE"
    });
  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;

})(window);
