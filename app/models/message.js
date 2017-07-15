import DS from 'ember-data';

export default DS.Model.extend({
  topic:DS.attr(),
  author:DS.attr(),
  additional:DS.attr(),
  time:DS.attr(),
  message:DS.hasMany('message', { async:true })
});
