import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Toaster } from 'react-hot-toast';

// Initialize theme before rendering
document.documentElement.classList.toggle(
   'dark',
   localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
         window.matchMedia('(prefers-color-scheme: dark)').matches)
);

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <BrowserRouter>
         <Routes>
            <Route index element={<App />} />
         </Routes>
      </BrowserRouter>
      <Toaster />
   </StrictMode>
);
