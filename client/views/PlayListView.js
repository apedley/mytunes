var PlayListView = Backbone.View.extend({
  tagName: 'table',
  className: 'table table-bordered table-striped',

  initialize: function(){
    this.render();
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this );
  },

  render: function(){

    this.$el.children().detach();
    // this.collection.get('name')
    // this.$el.html('<th>'+this.collection.get('name')+'</th>').append(
    this.$el.html('<th>PlayList</th>').append(
      this.collection.map(function(song){
        return new PlayListEntryView({model: song}).render();
      })
    );
  },
})
