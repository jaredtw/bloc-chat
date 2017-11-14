(function() {
    function HomeCtrl($scope, Room, Message) {
        $scope.chatRooms = Room.all;
        $scope.currentRoom = null;
        $scope.messages = null;

        $scope.open = function () {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl'
            })
        };

        $scope.setCurrentRoom = function (room) {
            $scope.currentRoom = room;
            console.log("Current Room ID: " + $scope.currentRoom.$id);

            $scope.messages = Message.getByRoomId(room.$id);
        };

        return $scope.chatRooms;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', 'Message', HomeCtrl]);
})();
