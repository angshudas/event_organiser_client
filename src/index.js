import ReactDom from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import './index.css';
import App from './App';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);