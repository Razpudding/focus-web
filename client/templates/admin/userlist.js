Template.userList.helpers({
  users: function() {
    return Meteor.users.find({});
  }
});