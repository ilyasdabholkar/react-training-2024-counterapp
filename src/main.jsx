import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './Counter.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import MyComponent from './MyComponent.jsx';
import ScreenComponent from './ScreenComponent.jsx';
import Form from './Form.jsx';

let element = <h1>MY Component</h1>;
console.log(element);

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      {/* <App addionalData="test data" /> */}
      <Form />
    </BrowserRouter>
)
