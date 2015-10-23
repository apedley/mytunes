var PlayListEntryView = Backbone.View.extend({

  tagName: 'tr',
  template: _.template('<td class="song">(<%= artist %>)</td><td><%= title %></td><td><%= playCount %></td>'),
  initialize: function(){

  },
  events: {
    'click': function(){
      this.model.removeFromPlayList();
    },
  },

  render: function(){
      return this.$el.html(this.template(this.model.attributes));
  },
})
