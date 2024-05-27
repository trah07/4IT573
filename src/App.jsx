import React from 'react';
import { createRoot } from 'react-dom/client';
import SearchParams from './components/SearchParams';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CarDetails from './components/CarDetails';
import { QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="py-5 text-3xl font-bold tracking-tight text-gray-900">
              <Link to={'/'}>React App Cars</Link>
            </h2>
            <Routes>
              <Route path="/" element={<SearchParams />} />
              <Route path="/details/:id" element={<CarDetails />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
