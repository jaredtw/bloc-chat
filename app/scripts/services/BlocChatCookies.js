(function () {
    	function BlocChatCookies($cookies, $uibModal) {
      		var currentUser = $cookies.get('blocChatCurrentUser');
      		if (!currentUser || currentUser === '') {
        			$uibModal.open({
        				templateUrl: '/templates/usernamemodal.html',
        				controller: 'UserModalInstanceCtrl',
        				controllerAs: 'usermodal',
        				size: 'sm',
        				backdrop: 'static',
        				keyboard: false
        			})

        			this.toggleAnimation = function () {
        				this.animationsEnabled = !this.animationsEnabled;
        			};
      		}
    	}

    	angular
    		.module('blocChat')
    		.run(['$cookies', '$uibModal', BlocChatCookies]);
})();
