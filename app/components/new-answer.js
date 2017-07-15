import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var message = params.message;
      message.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return message.save();
      });
      this.transitionTo('message', message);
    }
  }
});
