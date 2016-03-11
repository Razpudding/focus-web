//TODO: move subscription to a better place
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('FocusSessions'); }
});

Router.route('/', {name: 'landingPage'});

Router.route('/admin', {name: 'admin'});

Router.route('/sessions/:_id', {
  name: 'sessionPage',
  data: function() { return FocusSessions.findOne(this.params._id); }
});


const requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}
