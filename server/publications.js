Meteor.publish('FocusSessions', function() {
  return FocusSessions.find();
});