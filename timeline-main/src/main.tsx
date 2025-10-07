import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import './globals.css';
import {AppLayout} from './layout';
import {Navbar} from './navbar';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AppLayout>
			<Navbar />
			<App />
		</AppLayout>
	</React.StrictMode>,
);
