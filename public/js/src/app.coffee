angular.module('App', [
	# 'ngResource', 
])

angular.module('App')
	.config () ->
		
	
# Include Services
require './services/authService'
	
# Include Directives


# Include Factories



# Include Controllers
require './controllers/main/home'





# Include Routes
require './routes'

