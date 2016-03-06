Template.pretest.helpers({
  focusSessions: function() {
    return FocusSessions.find({},{sort: {date: -1}});
  }
});

// Meteor.call('insertSession', {
//     type: 'lab',
//     iteration: 1,
//     date: new Date("March 10, 2016 9:50:00"),
//     participants: ["Derkler"],
//   }, function (error, result){
//     console.log(error ? error.invalidKeys : result);
//   });