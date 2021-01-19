import react from 'react'
import { Container, Row, Col } from "react-bootstrap";
import logo from './logo.svg';
import './App.css';
import Side from './component/Side/Side';
import notif from './assets/notification.png'
import messages from './assets/messages.png'


function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col sm={2}>
            <Side />
          </Col>
          <Col sm={10} className="all">
            <Row>
              <Col lg={10}>
                <div class="container-1">
                  <span class="icon"><i class="fa fa-search"></i></span>
                  <input type="search" id="search" placeholder="Поиск..." />
                </div>
              </Col>
              <Col lg={1}>
                <div className="notification">
                  <img src={notif} />
                </div>
              </Col>
              <Col lg={1}>
                <div className="notification">
                  <img src={messages} />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
