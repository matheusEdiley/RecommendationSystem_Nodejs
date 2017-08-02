import {server} from './serverConfig';

server.get('/', (req, res) => {
  res.json(
  	{
  		'message': 'Hello world node.js es6 app.'
  	}
  );
});
