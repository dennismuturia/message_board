import Ember from 'ember';

export default Ember.Component.extend({
  updateMessageForm: false,
  actions: {
  updateMessageForm() {
    this.set('updateMessageForm', true);
  },
  update(message) {
    var params = {
      topic: this.get('topic'),
      author: this.get('author'),
      additional: this.get('additional'),
      time: this.get('time')
    };
    this.set('updateMessageForm', false);
    this.sendAction('update', message, params);
  }
}
});
