var PlayList = Songs.extend({
// var play = new PlayList({name: 'my play list'})
  initialize : function(params){

    if(params){
      this.set('name', params.name);
    }

    this.on('add', this.addToPlayList, this );
    this.on('ended', this.ended, this );
    this.on('removeFromPlayList', this.dequeue, this);
  },

  addToPlayList : function() {
    if(this.length === 1){
      this.first().play();
    }
  },

  ended: function() {
    this.remove(this.first());
    if(this.length > 0){
      this.first().play();
    }
  },

  dequeue: function(song) {
    this.remove(song);
  }
});
