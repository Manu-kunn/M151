import { createServer } from 'http';

const server = createServer((request, response) => {
  response.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' });
  response.write('Hello '); // Bruchstücke "Chunks" der Antwort werden gesendet
  response.end(' World\n'); // Sendet den angegebenen Chunk zum Client und beendet im, Anschluss die Antwort.
});
server.listen(8080, () => {
  console.log(
    `Server is listening to http://localhost.${server.address().port}`
  );
});
