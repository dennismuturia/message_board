import Ember from 'ember';

export default Ember.Component.extend({
  isNameShowing : false,
  actions:{
    nameShow: function(){
      this.set('isNameShowing', true);
    },
    nameHide: function(){
      this.set('isNameShowing', false);
    },
    saveAnswer(params){
      this.sendAction('saveAnswer', params);
    }
  }
});
