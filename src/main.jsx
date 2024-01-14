import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/Navbar/Menu';
import { Home } from './pages/home';
import { Nosotros } from './pages/nosotros';
import { Curso } from './pages/curso';
import { Footer } from './components/Footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Header />
      <Home />
      <Nosotros />
      <Curso />
      <Footer />
  </React.StrictMode>,
)
