import React, { useEffect, useState } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import './aboutUs.scss';

const AboutUs = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);

  const videoOptions = {
    height: '480',
    width: '853',
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json')
      .then(response => response.json())
      .then(data => {
        
        const updatedData = data.map((author, index) => {
          let modifiedBio = '';
          let name = '';
          let surname = '';
          let role = '';

          switch (index) {
            case 0:
              name = 'John';
              surname = 'Wood';
              role = 'Founder & CEO';
              modifiedBio = 'John Wood founded our furniture shop with a vision to bring modern, high-quality designs to homes across the world.';
              break;
            case 1:
              name = 'Emily';
              surname = 'Carver';
              role = 'Master Craftsman';
              modifiedBio = 'Emily Carver is renowned for her exquisite craftsmanship, creating stunning handmade furniture pieces.';
              break;
            case 2:
              name = 'Liam';
              surname = 'Mason';
              role = 'Chief Designer';
              modifiedBio = 'Liam Mason is the creative genius behind our most popular collections, bringing innovative ideas to life.';
              break;
            case 3:
              name = 'Sophia';
              surname = 'Harris';
              role = 'Operations Manager';
              modifiedBio = 'Sophia Harris ensures that every aspect of our business runs smoothly, from production to customer service.';
              break;
            case 4:
              name = 'Oliver';
              surname = 'Green';
              role = 'Marketing Director';
              modifiedBio = 'Oliver Green leads our marketing efforts, crafting campaigns that resonate with our customers.';
              break;
            case 5:
              name = 'Ethan';
              surname = 'Stone';
              role = 'Logistics Coordinator';
              modifiedBio = 'Ethan Stone manages our logistics, ensuring that every order arrives on time and in perfect condition.';
              break;
            case 6:
              name = 'James';
              surname = 'Reed';
              role = 'Customer Service Lead';
              modifiedBio = 'James Reed leads our customer service team, ensuring that every customer has a positive experience.';
              break;
            case 7:
              name = 'Isabella';
              surname = 'Knight';
              role = 'Sales Manager';
              modifiedBio = 'Isabella Knight heads our sales team, helping customers find the perfect pieces for their homes.';
              break;
            case 8:
              name = 'Ava';
              surname = 'Turner';
              role = 'Interior Designer';
              modifiedBio = 'Ava Turner specializes in interior design, helping customers create beautiful and functional spaces with our furniture.';
              break;
            case 9:
              name = 'Henry';
              surname = 'Walker';
              role = 'Warehouse Manager';
              modifiedBio = 'Henry Walker oversees our warehouse operations, ensuring that our inventory is always well-organized and accessible.';
              break;
            case 10:
              name = 'Lucas';
              surname = 'Young';
              role = 'E-commerce Specialist';
              modifiedBio = 'Lucas Young manages our online store, ensuring a seamless shopping experience for our customers.';
              break;
            case 11:
              name = 'Mia';
              surname = 'Brown';
              role = 'Furniture Assembler';
              modifiedBio = 'Mia Brown is responsible for assembling and inspecting our furniture, ensuring it meets our high-quality standards.';
              break;
            case 12:
              name = 'Charlotte';
              surname = 'King';
              role = 'Customer Support Representative';
              modifiedBio = 'Charlotte King provides exceptional support to our customers, helping them with any questions or issues they may have.';
              break;
            case 13:
              name = 'Michael';
              surname = 'Wright';
              role = 'Finance Manager';
              modifiedBio = 'Michael Wright manages our finances, ensuring that our business remains profitable and sustainable.';
              break;
            case 14:
              name = 'Amelia';
              surname = 'Scott';
              role = 'Content Creator';
              modifiedBio = 'Amelia Scott creates engaging content for our marketing campaigns, showcasing our furniture in the best possible light.';
              break;
            case 15:
              name = 'Daniel';
              surname = 'Hill';
              role = 'Supply Chain Manager';
              modifiedBio = 'Daniel Hill manages our supply chain, ensuring that we always have the materials we need to create our furniture.';
              break;
            default:
              name = 'Team';
              surname = 'Member';
              role = 'Staff';
              modifiedBio = 'A dedicated member of our team, committed to bringing the best products and service to our customers.';
          }

          return {
            ...author,
            name: `${name} ${surname}`,
            role,
            bio: modifiedBio,
          };
        });

        setAuthors(updatedData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching authors data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

 
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

 
  const displayedAuthors = showMore ? authors : authors.slice(0, 6);

  return (
    <Container className="about-us">
      <h1>About Us</h1>
      <div className="video-container mb-4">
        <YouTube videoId="dPMTD7ifzcQ" opts={videoOptions} />
      </div>
      <Row>
        {displayedAuthors.length > 0 ? (
          displayedAuthors.map((author, index) => (
            <Col key={index} md={4}>
              <Card className="mb-4">
                <Card.Img variant="top" src={author.image} alt={author.name} />
                <Card.Body>
                  <Card.Title>{author.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{author.role}</Card.Subtitle>
                  <Card.Text>
                    {author.bio.length > 50 ? `${author.bio.slice(0, 50)}...` : author.bio}
                  </Card.Text>
                  <Link to={`/biography/${index}`}>
                    <Button variant="primary">Read More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col md={12}>
            <p>No authors found.</p>
          </Col>
        )}
      </Row>
      {authors.length > 6 && (
        <div className="text-center mt-4">
          <Button variant="secondary" onClick={handleShowMore}>
            {showMore ? 'Show Less' : 'Show More'}
          </Button>
        </div>
      )}
    </Container>
  );
};

export default AboutUs;


















