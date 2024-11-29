import React, { useState } from 'react';
    import { Link } from 'react-router-dom';

    const ProductSection = () => {
      const [activeTab, setActiveTab] = useState('THC');

      const products = {
        THC: [
          { id: 1, title: 'Gorilla Sour Mix', category: 'Cartucho THC', description: 'Potente mezcla de sabores cítricos.' },
          { id: 2, title: 'Blue Dream', category: 'Flor THC', description: 'Efecto relajante y eufórico.' },
          { id: 3, title: 'Pineapple Express', category: 'Aceite THC', description: 'Aroma tropical y dulce.' },
        ],
        CBD: [
          { id: 4, title: 'CBD Relax', category: 'Aceite CBD', description: 'Ideal para relajarse después de un día largo.' },
          { id: 5, title: 'Hemp Balm', category: 'Bálsamo CBD', description: 'Alivio tópico para dolores musculares.' },
          { id: 6, title: 'Calm Gummies', category: 'Gomitas CBD', description: 'Gomitas para calmar la mente.' },
        ],
        'Para Relajarse': [
          { id: 7, title: 'Lavender Bliss', category: 'Vela Aromática', description: 'Aroma relajante de lavanda.' },
          { id: 8, title: 'Chamomile Tea', category: 'Té de Manzanilla', description: 'Infusión para calmar el estrés.' },
          { id: 9, title: 'Zen Bath Bomb', category: 'Bomba de Baño', description: 'Experiencia de baño relajante.' },
        ],
        'Para Estar Activo': [
          { id: 10, title: 'Energy Bar', category: 'Barra Energética', description: 'Aumenta tu energía naturalmente.' },
          { id: 11, title: 'Focus Drops', category: 'Gotas de Enfoque', description: 'Mejora la concentración y claridad.' },
          { id: 12, title: 'Morning Boost', category: 'Café Energético', description: 'Comienza tu día con energía.' },
        ],
      };

      return (
        <section className="products">
          <h2>Últimos Productos</h2>
          <div className="tabs">
            {Object.keys(products).map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}>
                {tab}
              </button>
            ))}
          </div>
          <div className="product-cards">
            {products[activeTab].map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="card">
                <div className="image-placeholder">Imagen del Producto</div>
                <div>Categoría: {product.category}</div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <div className="button-group">
                  <button>Comprar</button>
                  <button>Añadir al Carrito</button>
                </div>
              </Link>
            ))}
          </div>
        </section>
      );
    };

    export default ProductSection;
