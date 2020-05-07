var Messages = {
  username: window.location.search.substr(10) || 'anonymous',
  text: 'Default Message',
  roomname: $('#roomname option:selected').text()
};