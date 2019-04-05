import * as http from 'http';
import parseurl from 'parseurl';
import { getHandler } from './routing/routing';
import dotenv from 'dotenv';
import SocketIO from 'socket.io';
import { getAllQuests, getAllTracks, getAllAchievements } from './contentful/contentful';

dotenv.config();

const port = process.env.PORT || 5000;

function mangleCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  return res;
}

function createServerHandler(req, res) {
  const requestUrl = parseurl(req);
  const handler = getHandler(requestUrl.pathname);
  handler(requestUrl, req, mangleCors(res));
}

const server = http.createServer(createServerHandler);
const io = SocketIO(server);
server.listen(port, () => console.log(`Coinsson server listening on port ${port} ♪♫♫♪`));

io.on('connection', function (socket) {
  socket.on('unknown', (data) => {
    console.info('unknown event', data);
  });

  socket.on('update track', () => {
    getAllTracks().then((tracks) => {
      socket.broadcast.emit('tracks', tracks);
      socket.emit('tracks', tracks);
    });
  });

  socket.on('update quests', () => {
    getAllQuests().then((quests) => {
      socket.broadcast.emit('quests', quests);
      socket.emit('quests', quests);
    });
  });

  socket.on('update achievements', () => {
    getAllAchievements().then((achievs) => {
      socket.broadcast.emit('achievements', achievs);
      socket.emit('achievements', achievs);
    });
  });
});
