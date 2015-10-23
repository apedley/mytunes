var PlayListEntryView = Backbone.View.extend({

  tagName: 'tr',
  template: _.template('<td class="song">(<%= artist %>)</td><td><%= title %></td><td><%= playCount %></td>'),
  initialize: function(){
  
  },

  render: function(){
      return this.$el.html(this.template(this.model.attributes));
  },
})
