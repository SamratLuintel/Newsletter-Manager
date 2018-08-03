import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import reducers from './store/reducers/reducersIndex';
import reduxThunk from 'redux-thunk';

const store = createStore(reducers,applyMiddleware(reduxThunk))

ReactDOM.render(
    <div>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </div>
    ,
    document.getElementById('root'));
registerServiceWorker();
