Template.sessionElement.helpers({
  participants: function() {
    return this.participants.length > 0 ? `participants: ${this.participants}` : '';
  }
});

