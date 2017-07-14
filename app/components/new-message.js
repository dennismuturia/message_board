import Ember from 'ember';

export default Ember.Component.extend({
  addNewMessage: false,
  actions:{
    messageFormShow(){
      this.set('addNewMessage', true);
    },
    saveMessage1(){
      var params ={
        topic = this.get('topic'),
        author = this.get('author'),
        additional = this.get('additional')
      };
      this.set('addNewMessage', false);
      this.sendAction('saveMessage2', params);
    }
  }
});
