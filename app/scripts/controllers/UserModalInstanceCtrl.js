(function () {
    	function UserModalInstanceCtrl($scope, $uibModalInstance, $cookies) {
        		this.ok = function () {
          			$cookies.put('blocChatCurrentUser', this.newUsername);

          			console.log("You just created a new user: " + this.newUsername);
          			console.log("You just created a new cookie: " + $cookies.blocChatCurrentUser);

          			$uibModalInstance.close($cookies.blocChatCurrentUser);
        		};
    	}

  	angular
  		.module('blocChat')
  		.controller('UserModalInstanceCtrl', ['$scope', '$uibModalInstance', '$cookies', UserModalInstanceCtrl]);
})();
