FlowRouter.route('/', {
    name: 'home',
    action: function() {
        BlazeLayout.render('adminLayout', {main: 'dashboard1'});
    }
});