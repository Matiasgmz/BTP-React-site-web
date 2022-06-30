import ReactDOM from "react-dom/client";
import React from 'react';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);