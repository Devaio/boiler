# angular.module 'App'
# 	.config ['$stateProvider', '$urlRouterProvider', '$locationProvider', ($stateProvider, $urlRouterProvider, $locationProvider)->
# 		$locationProvider.html5Mode(true);

# 		#For any unmatched url, redirect to /state1
# 		$urlRouterProvider.otherwise('/');

# 		$stateProvider
# 			.state 'home', {
# 				url: '/',
# 				controller: 'homeCont',
# 				templateUrl: '/public/templates/main/home.html'
# 			}
			
# 	]