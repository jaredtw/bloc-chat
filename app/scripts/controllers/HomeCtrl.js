(function() {
    function HomeCtrl($scope, Room) {
        $scope.chatRooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', HomeCtrl]);
})();
