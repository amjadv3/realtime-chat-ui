import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './components/Join/Join.js.js';
import Chat from './components/Chat/Chat.js.js';
const App = () => (
	<Router>
		<Route path="/" exact component={Join} />
		<Route path="/chat" exact render={(props) => <Chat {...props} />} />
	</Router>
);

export default App;
