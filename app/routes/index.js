import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('message');
    return this.store.findAll('answer');
  },
  actions:{
    saveMessage3(params){
      var newMessage=this.store.createRecord('message', params);
      newMessage.save();
      this.transitionTo('index');
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      this.transitionTo('index');
    }
  }
});
