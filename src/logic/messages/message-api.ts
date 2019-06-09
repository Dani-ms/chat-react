import IO from 'socket.io-client';


export const messageApi = IO("https://chat-jeffersontpadua.herokuapp.com/", {
    secure: true
  });
