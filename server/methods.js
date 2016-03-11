Meteor.methods({
  insertSession: function(doc) {
    // Important server-side check for security and data integrity
    check(doc, FocusSessions.schema);

    FocusSessions.insert(doc, function (error, result){
    console.log(error ? error.invalidKeys : result);
    });
  },
  joinSession: function(sessionId) {
    check(sessionId, String)
    console.log("joinsession called for user: " + this.userId)
    //let user = Meteor.users.find({_id:userId}).fetch();
    console.log(Meteor.users.update(this.userId, {$addToSet: {sessions: sessionId}}));
  }
});