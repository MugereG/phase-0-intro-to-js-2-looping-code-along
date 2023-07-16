// Code your solutions in this file
function writeCards(names, event) {
    const messages = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for attending the wonderful ${event} event.`;
      messages.push(message);
    }
  
    return messages;
  }
  