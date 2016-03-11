//Add an event for when the link is clicked
//Call the meteor method joinSession
// Have it add the session ID to the users sessionsJoined array
// Use that on the userlist admin page to show future and past sessions

Template.sessionPage.events({
	'click #aanmeldBtn': function(e){
		console.log("here");
		console.log("is this a sessionId? " + this._id);
		Meteor.call('joinSession', this._id);
	}
});