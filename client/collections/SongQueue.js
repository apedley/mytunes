// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', this.songAdded, this);
    this.on('ended', this.songEnded, this);
    this.on('dequeue', this.songRemoved, this);
  },
  songRemoved: function(song) {
    this.remove(song);
  },

  songAdded: function() {
    if (this.length === 1) {
      this.playFirst();
    }
  },

  playFirst: function() {
    var song = this.first();
    song.play();
  },

  songEnded: function() {
    this.shift();
    if (this.length > 0) {
      this.playFirst();
    }
  }

});
