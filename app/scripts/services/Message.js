(function () {
   	function Message($firebaseArray) {
   		   var allmessagesRef = firebase.database().ref().child("messages");

   		   return {
   			     getByRoomId: function (roomId) {
                  console.log('Passed RoomId: ' + roomId);
                  console.log($firebaseArray(allmessagesRef));
   				        return $firebaseArray(allmessagesRef.orderByChild("roomId").equalTo(roomId));
   			        }
   		    };
   	}

 	  angular
 		  .module('blocChat')
 		  .factory('Message', ['$firebaseArray', Message]);
 })();
