import Ember from 'ember';

export default Ember.Component.extend({
  isTimeShowing : false,
  actions:{
    timeShow: function(){
      this.set('isTimeShowing', true);
    },
    timeHide: function(){
      this.set('isTimeShowing', false);
    },
    delete(message){
      if(confirm("Are you sure you want to Delete this message??")){
        this.sendAction(destroyMessage, message);
      }
    }
  }
});
