(function () {
	 function ModalInstanceCtrl($uibModalInstance) {
    		this.ok = function () {
    			this.room = {
    				name: ''
    			};
    			console.log("You just created a new room: " + this.name);
    			$uibModalInstance.close(this.name);
    		};

    		this.cancel = function () {
    			$uibModalInstance.dismiss('cancel');
    		};
    	}

	 angular
		.module('blocChat')
		.controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();
