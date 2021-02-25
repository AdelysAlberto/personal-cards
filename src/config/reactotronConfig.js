import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

let reactotron;

if (process.env.NODE_ENV === 'development') {
  reactotron = Reactotron.configure() // controls connection & communication settings
    .use(sagaPlugin())
    .use(reactotronRedux())
    .connect();

  console.tron = Reactotron;
}

export default reactotron;
