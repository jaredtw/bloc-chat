(function() {
    function HomeCtrl($scope, $cookies, Room, Message) {
        $scope.chatRooms = Room.all;
        $scope.currentRoom = null;
        $scope.messages = null;
        $scope.curentUser = '';

        $scope.open = function () {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl'
            })
        };

        $scope.setCurrentRoom = function (room) {
            $scope.currentRoom = room;
            $scope.currentUser = $cookies.get('blocChatCurrentUser');

            $scope.messages = Message.getByRoomId(room.$id);
        };

        $scope.sendMessage = function (room) {
              Message.send($scope.newMessage, room.$id, $scope.currentUser);
        };

        return $scope.chatRooms;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', '$cookies', 'Room', 'Message', HomeCtrl]);
})();
