Meteor.methods({
  insertSession: function(doc) {
    // Important server-side check for security and data integrity
    check(doc, FocusSessions.schema);

    FocusSessions.insert(doc, function (error, result){
    console.log(error ? error.invalidKeys : result);
    });
  }
});