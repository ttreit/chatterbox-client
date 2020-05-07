var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(results) {
    debugger;
    results.forEach(messageObj => {
      if (messageObj.username === '%20' || messageObj.username === undefined) {
        messageObj.username = 'Anonymous';
      }
      if (/%20/.test(messageObj.username)) {
        messageObj.username = messageObj.username.replace(/[%20]/g, ' ');
      }
      if (messageObj.text === '' || messageObj.text === undefined) {
        messageObj.text = Messages.text;
      }
      MessagesView.renderMessage(messageObj);

    });
  },

  renderMessage: function(message) {
    this.$chats.append(MessageView.render(message));
  }

};