angular.module 'App'
	.service 'authService', ['$http', '$location', ($http, $location) ->
		
		this.authCheck = (cb) ->
			$http.get '/api/me'
				.then (returnData) ->
					if returnData.data.user
						cb(returnData.data.user)
					else
						$location.url '/'
						
	]