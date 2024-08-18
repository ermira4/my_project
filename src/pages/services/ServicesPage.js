import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Spinner, Button } from 'react-bootstrap';
import './ServicesPage.css';

function ServicesPage() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch margarita cocktails data from the CocktailDB API
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
      .then(response => response.json())
      .then(data => {
        setCocktails(data.drinks || []); // Extract cocktail data
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching cocktails data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <h1 className="text-center mb-5">Showroom Specials</h1>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <div>
          {/* Responsive grid layout for cards */}
          <Row className="card-container">
            {cocktails.map((cocktail) => (
              <Col md={4} key={cocktail.idDrink} className="mb-4">
                <Card className="service-card">
                  <Card.Img variant="top" src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                  <Card.Body>
                    <Card.Title>{cocktail.strDrink}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Specialty: {cocktail.strCategory}</Card.Subtitle>
                    <Card.Text>
                      <strong>Type:</strong> {cocktail.strAlcoholic} <br />
                      <strong>Enjoy:</strong> {cocktail.strInstructions.slice(0, 100)}...
                    </Card.Text>
                    <Button variant="primary" href={`https://www.thecocktaildb.com/drink/${cocktail.idDrink}`} target="_blank" rel="noopener noreferrer">
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </Container>
  );
}

export default ServicesPage;

















