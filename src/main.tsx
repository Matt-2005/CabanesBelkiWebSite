import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Layout } from './components/Layout';
import { initPreloader } from './hooks/useAppReady';
import Home from './pages/Home';
import Concept from './pages/Concept';
import Sejourner from './pages/Sejourner';
import Experience from './pages/Experience';
import Galerie from './pages/Galerie';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './styles/global.css';

initPreloader();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="concept" element={<Concept />} />
          <Route path="sejourner" element={<Sejourner />} />
          <Route path="experience" element={<Experience />} />
          <Route path="galerie" element={<Galerie />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
