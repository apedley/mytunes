// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td class="song">(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function(song) {
      this.model.dequeue();
    }
  },


  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
