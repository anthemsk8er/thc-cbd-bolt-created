import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import Navbar from './components/Navbar';
    import Sidebar from './components/Sidebar';
    import HeroSection from './components/HeroSection';
    import ProductSection from './components/ProductSection';
    import NewsSection from './components/NewsSection';
    import ProductPage from './components/ProductPage';

    const App = () => {
      const [showSidebar, setShowSidebar] = React.useState(false);

      return (
        <Router>
          <Navbar />
          <Sidebar showSidebar={showSidebar} onSidebarHide={() => setShowSidebar(false)} />
          <Routes>
            <Route path="/" element={
              <main>
                <HeroSection />
                <ProductSection />
                <NewsSection />
              </main>
            } />
            <Route path="/product/:productId" element={<ProductPage />} />
          </Routes>
        </Router>
      );
    };

    export default App;
