import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
import backgroundImage from '../icons/backgroundImage.jpg'
import net_log from '../icons/logo.png'
import { Container } from 'react-bootstrap';

export default function HomePage() {
  return (
    <>
      <Row>
        <Col className='netflix-header'>
          <img src={net_log} alt='netflix_log' style={{ width: '9.25rem' }} />
        </Col>
        <Col className='netflix-header'>
          <Button variant="danger">Sign In</Button>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col className='netflix-header'>
            <h2 className='home-heading1'>Unlimited movies, TV shows and more</h2>
            <p className='home-heading2'>Watch anywhere. Cancel anytime.</p>
            <p className='home-heading3'>Ready to watch? Enter your email to create or restart your membership.</p>
          </Col>
        </Row>
      </Container>
      <div>
        <img src={backgroundImage} alt='background-pics'
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className='background-grad' />
      </div>
    </>
  )
}
