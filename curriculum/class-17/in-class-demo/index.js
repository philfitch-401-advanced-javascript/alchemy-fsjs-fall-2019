const App = require('./app');
const api = require('./rickAndMortyApi');

const app = new App(api);

app.start();
