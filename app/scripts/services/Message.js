(function () {
   	function Message($firebaseArray, $cookies, Room) {
   		   var allmessagesRef = firebase.database().ref().child("messages");
         var messages = $firebaseArray(allmessagesRef);

   		   return {
   			     getByRoomId: function (roomId) {
                  console.log('Passed RoomId: ' + roomId);
                  console.log($firebaseArray(allmessagesRef));
   				        return $firebaseArray(allmessagesRef.orderByChild("roomId").equalTo(roomId));
   			        },

             send: function (newMessage, roomId, username) {

                  var messageData = {
                        username: username,
                        content: newMessage,
                        sentAt: Date.now(),
                        roomId: roomId
                  };
                  console.log('newMessage = ' + newMessage);

                  var newMessageKey = firebase.database().ref().child('messages').push().key;
                  console.log('new message key = ' + newMessageKey);

                  var refresh = {};
                  refresh['/messages/' + newMessageKey] = messageData;

                  return firebase.database().ref().update(refresh);
             }
   		    };
   	}

 	  angular
 		  .module('blocChat')
 		  .factory('Message', ['$firebaseArray', '$cookies', 'Room', Message]);
 })();
