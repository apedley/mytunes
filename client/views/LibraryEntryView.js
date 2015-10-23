// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="song">(<%= artist %>)</td><td><%= title %></td><td><%= playCount %></td><td><button class ="AddToQueue">Add to Queue</button></td><td><button class="AddToPlaylist">Add</button></td>'),
  initialize: function() {
    this.model.on('change', this.render, this);
  },
  events: {
    'click': function(e) {
      // this.model.play();
      if(e.toElement.className === 'AddToQueue'){
        this.model.enqueue();
      }
      if(e.toElement.className === 'AddToPlaylist'){
        this.model.addToPlayList();
      }

    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
