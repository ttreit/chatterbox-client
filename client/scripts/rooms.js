var Rooms = {
  add: function() {
    var userRoom = prompt('Please enter a new room');
    if (userRoom === '' || userRoom === null) {
      $('#rooms select option[value = null]').remove();
    } else if (RoomsView.allRooms.indexOf(userRoom) >= 0) {
      prompt('That room already exists, please enter a new room name');
    } else {
      RoomsView.$select.prepend(`<option>${userRoom}</option>`);
      Messages.roomname = userRoom;
    }

  },

  render: function(room) {
    RoomsView.$select.append(`<option>${room}</option>`);
  }

};

