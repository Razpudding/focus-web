Meteor.publish('FocusSessions', function() {
  return FocusSessions.find();
});

Meteor.publish('Users', function() {
  return Meteor.users.find();
});