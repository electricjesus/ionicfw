Package.describe({
	summary: 'Ionic Framework for Meteor with SCSS support'
})

Package.on_use(function(api){
	api.use(['scss'], 'client');
	api.add_files(['ionic.scss','ionic.js'], 'client');
})

Package.on_test(function (api) {
  api.use('ionicfw');

  api.add_files('ionicfw_tests.js', ['client']);
});

