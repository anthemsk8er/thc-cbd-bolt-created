import React from 'react';
    import { useParams, Link } from 'react-router-dom';

    const products = {
      1: {
        title: 'Gorilla Sour Mix',
        category: 'Cartucho THC',
        description: 'Potente mezcla de sabores cítricos. Ideal para relajarse y disfrutar de un momento de tranquilidad.',
        images: ['product-image1.jpg', 'product-image2.jpg', 'product-image3.jpg'],
        requiresPrescription: true,
        type: 'Cartucho',
        quantity: '1g',
        price: '$50',
        strainType: 'Indica',
        benefits: 'Relajación, alivio del estrés',
      },
      // Otros productos...
    };

    const ProductPage = () => {
      const { productId } = useParams();
      const product = products[productId];

      if (!product) {
        return <div>Producto no encontrado</div>;
      }

      return (
        <div className="product-page">
          <div className="hero">
            <h1>{product.title}</h1>
            <p>
              <Link to="/">Inicio</Link> &gt; 
              <Link to={`/category/${product.category}`}>{product.category}</Link> &gt; 
              {product.title}
            </p>
          </div>
          <div className="product-details">
            <div className="gallery">
              {product.images.map((image, index) => (
                <img key={index} src={image} alt={`${product.title} ${index + 1}`} />
              ))}
            </div>
            <div className="info">
              <h2>{product.category}</h2>
              <ul>
                <li><strong>Nombre:</strong> {product.title}</li>
                <li><strong>Tipo:</strong> {product.type}</li>
                <li><strong>Cantidad:</strong> {product.quantity}</li>
                <li><strong>Precio:</strong> {product.price}</li>
                <li><strong>Tipo de Marihuana:</strong> {product.strainType}</li>
                <li><strong>Beneficios:</strong> {product.benefits}</li>
              </ul>
              {product.requiresPrescription && (
                <div className="prescription-notice">
                  Requiere receta médica
                </div>
              )}
            </div>
          </div>
        </div>
      );
    };

    export default ProductPage;
