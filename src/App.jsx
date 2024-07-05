import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/loader';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import routes from './routesConfig';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route key='/' path='/' element={<Home />} />
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
