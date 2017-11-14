(function () {
    	function UserModalInstanceCtrl($scope, $uibModalInstance, $cookies) {
        		this.ok = function () {
          			$cookies.put('blocChatCurrentUser', this.name);

          			console.log("You just created a new user: " + this.name);
          			console.log("You just created a new cookie: " + $cookies.blocChatCurrentUser);

          			$uibModalInstance.close(this.name);
        		};
    	}

  	angular
  		.module('blocChat')
  		.controller('UserModalInstanceCtrl', ['$scope', '$uibModalInstance', '$cookies', UserModalInstanceCtrl]);
})();
