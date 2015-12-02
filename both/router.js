
FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action: function() {
        BlazeLayout.render('adminLayout', {main: 'dashboard1'});
    }
});
FlowRouter.route('/', {
    name: 'home',
    action: function() {
        BlazeLayout.render('frontendLayout', {main: 'home'});
    }
});