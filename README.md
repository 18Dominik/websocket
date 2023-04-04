# WebSocket
Illustrating the use of websockets
- Websocket (bi-directional based) is Application Layer Protocol (Layer 7 of OSI) similar to HTTP (request-response based)
- WebSocket URI Scheme: ws (unencrypted), wss (encrypted)
- Start App: 
  - node index.js
  - make ports 3000 and 8081 public; 
  - use updated gitpod-url because websockets do not use relative paths. https://stackoverflow.com/questions/10406930/how-to-construct-a-websocket-uri-relative-to-the-page-uri

![image](https://user-images.githubusercontent.com/35842490/229771035-7db99aa8-f73b-46d2-849d-b2fe5563b833.png)
# Summary of HTTP
  - HTTP 1.1: Persistent connections and pipelining. With persistent connections, HTTP/1.1 assumes that a TCP connection should be kept open unless directly told to close. This allows the client to send multiple requests along the same connection without waiting for a response to each, greatly improving the performance of HTTP/1.1 over HTTP/1.0.
  - HTTP 2.0: Asynchronous data exchange by Multiplexing resolves the head-of-line blocking issue in HTTP/1.1 by ensuring that no message has to wait for another to finish.
  - HTTP 3.0: QUIC (Quick UDP Internet Connections) instead of TCP as Transport Protocol. QUIC enables true multiplexingResolves head-of-line blocking problem at the TCP level problem of HTTP/2 and multiplexing.
    - Requests can be submitted asynchronously, the order of responses does not matter, lost packets no longer hold up the queue
    - The TLS intermediate layer between HTTP and TCP is omitted because QUIC handles the encryption and authentication of the connection


![image](https://user-images.githubusercontent.com/35842490/229771183-10270a2c-304e-4b08-89be-bc92ae119bf9.png)


