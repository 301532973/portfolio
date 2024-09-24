import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const services = [
  {
    title: 'General Programming',
    description: 'Proficient in multiple programming languages including Python, Java, and C++.',
    image: '../images/program.jpg',
  },
  {
    title: 'Web Development',
    description: 'Development of responsive and dynamic websites using HTML, CSS, and JavaScript, along with frameworks like React.',
    image: '../images/web.jpg',
  },
  {
    title: 'Mobile App Development',
    description: 'Creating user-friendly mobile applications for both iOS and Android platforms.',
    image: '../images/mobileapp.png',
  },
  {
    title: 'Database Management',
    description: 'Designing and managing databases using SQL and NoSQL technologies.',
    image: '../images/sql.jpg',
  },
  {
    title: 'Software Testing and Quality Assurance',
    description: 'Implementing testing strategies to ensure software reliability and performance.',
    image: '../images/testing.png',
  },
  {
    title: 'Technical Support and Troubleshooting',
    description: 'Offering assistance with software and hardware issues, ensuring smooth operations.',
    image: '../images/ITsupport.jpg',
  },
];

const Services = () => {
  return (
    <div className="container mt-5">
      <h2> Services</h2>
      <Row>
        {services.map((service, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={service.image} />
              <Card.Body>
              <Card.Title style={{ color: 'white' }}>{service.title}</Card.Title>
                
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;
