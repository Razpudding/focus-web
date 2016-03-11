Template.sessionList.helpers({
  focusSessions: function() {
    return FocusSessions.find({},{sort: {date: -1}});
  }
});