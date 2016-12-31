angular.module('starter.services', [])

.factory('Meows', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var meows = [{
    id: 0,
    name: 'Rock',
    lastText: 'Meow?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Angelica',
    lastText: 'Meow meow meow',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Erin',
    lastText: 'Meowwwwwww',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Cherry',
    lastText: 'MEOW!!!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Jenny',
    lastText: 'Meowwwww!!!???',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return meows;
    },
    remove: function(chat) {
      meows.splice(meows.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < meows.length; i++) {
        if (meows[i].id === parseInt(chatId)) {
          return meows[i];
        }
      }
      return null;
    }
  };
});
