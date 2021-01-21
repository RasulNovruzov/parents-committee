import react from 'react'
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import logo from './logo.svg';
import './App.css';
import Side from './component/Side/Side';
import notif from './assets/notification.png'
import messages from './assets/messages.png'
import budgetbtn from './assets/budgetbtn.png';
import kalendar from './assets/leftside-img/kalendar.png';
import komitet from './assets/komitet.png';


const now = 27;
const progressInstance = <ProgressBar now={now} label={`${now}%`} srOnly />;

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

            <Row>
              <Col lg={7} className="leftside">
                <Row>
                  <Col>
                    <div className="budget">
                      <Row>
                        <Col lg={10}>
                          <h3>Бюджет</h3>
                        </Col>
                        <Col>
                          <img src={budgetbtn} />
                        </Col>
                      </Row>
                      <h2>63 000,000 R</h2>

                      <hr />

                      <Row>
                        <Col lg={9}>
                          <img src={kalendar} />
                            Период: год
                          </Col>
                        <Col>
                          100%
                          </Col>
                      </Row>
                    </div>
                  </Col>

                  <Col>
                    <div className="rasxodi">
                      <Row>
                        <Col lg={10}>
                          <h3>Расходы</h3>
                        </Col>
                        <Col>
                          <img src={budgetbtn} />
                        </Col>
                      </Row>
                      <h2>0,00 R</h2>

                      <hr />

                      <Row>
                        <Col lg={10}>
                          <img src={kalendar} />
                            Период: месяц
                          </Col>
                        <Col>
                          0%
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
                <Row className="secondrow">
                  <Col className="">
                    <div className="balans_v_budjete">
                      <Row>
                        <Col lg={10}>
                          <h3>Баланс <br /> в бюджете</h3>
                        </Col>
                        <Col>
                          <img src={budgetbtn} />
                        </Col>
                      </Row>
                      <h2>1 500,00 R</h2>

                      <hr />

                      <Row>
                        <Col lg={10}>
                          <img src={kalendar} />
                            Период: год
                          </Col>
                        <Col>
                          0%
                          </Col>
                      </Row>
                    </div>
                  </Col>

                  <Col>
                    <div className="rasxodi_na_meropriyatiya">
                      <Row>
                        <Col lg={10}>
                          <h3>Расходы на мероприятия</h3>
                        </Col>
                        <Col>
                          <img src={budgetbtn} />
                        </Col>
                      </Row>
                      <h2>2 350,00 R</h2>

                      <hr />

                      <Row>
                        <Col lg={10}>
                          <img src={kalendar} />
                            Период: год
                          </Col>
                        <Col>
                          0%
                          </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>

                <Row className="secondrow">
                  <Col>
                    <div className="meropriyatiya">
                      <Row>
                        <Col lg={10}>
                          <h3>Мероприятия</h3>
                        </Col>
                        <Col>
                          <img src={budgetbtn} />
                        </Col>
                      </Row>
                      <h3>28 дней рождения</h3>
                      <hr />
                      <Row>
                        <Col lg={9}>
                          <img src={kalendar} />
                            Период: год
                          </Col>
                        <Col>
                        </Col>
                      </Row>
                    </div>
                  </Col>

                  <Col>
                    <div className="balans_na_pitanii">
                      <Row>
                        <Col lg={10}>
                          <h3>Баланс <br /> на питании</h3>
                        </Col>
                        <Col>
                          <img src={budgetbtn} />
                        </Col>
                      </Row>
                      <h2>500,00 R</h2>

                      <hr />

                      <Row>
                        <Col lg={10}>
                          <img src={kalendar} />
                            Период: год
                          </Col>
                        <Col>
                          0%
                          </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>

                <div className="mediafile">
                  <h3>Медиафайлы</h3>

                  <h1>Тут загружаются файлы</h1>
                </div>
              </Col>




              <Col lg={5} className="rightside">
                <Row>
                  <Col lg={10}>
                    <h2>Календарь мероприятий</h2>
                  </Col>
                  <Col>
                    <img src={budgetbtn} />
                  </Col>
                </Row>
                <h5>Поход в музей геологии</h5>
                <p>Поход увлекательное путишествие в музей геологии. Неовобращимые впеатления и буря эмоций.</p>

                <img src={komitet} />

                <Row>
                  <Col lg={10}>
                    Дата
                  </Col>
                  <Col>
                    Время
                  </Col>
                </Row>

                <Row>
                  <Col lg={10}>
                    Место
                  </Col>

                  <Col>
                    Стоимость
                  </Col>
                </Row>

                Уже идут 17 детей <br />

                Все мероприятий

                <div className="qolosovanie">
                  <h4>Голосование</h4>
                  <p>Поход в музей Природы и человека</p>
                  {progressInstance}
                  <Row>
                    <Col lg={10}>
                      6 голосов
                    </Col>
                    <Col>
                      27%
                    </Col>
                  </Row>
                  <hr />


                  <p>Поход в музей Природы и человека</p>
                  {progressInstance}
                  <Row>
                    <Col lg={10}>
                      6 голосов
                    </Col>
                    <Col>
                      27%
                    </Col>
                  </Row>
                  <hr />


                  <p>Поход в музей Природы и человека</p>
                  {progressInstance}
                  <Row>
                    <Col lg={10}>
                      6 голосов
                    </Col>
                    <Col>
                      27%
                    </Col>
                  </Row>
                  <hr />


                  <p>Поход в музей Природы и человека</p>
                  {progressInstance}
                  <Row>
                    <Col lg={10}>
                      6 голосов
                    </Col>
                    <Col>
                      27%
                    </Col>
                  </Row>
                  <hr />

                  <Row>
                    <Col lg={10}>
                      Проголосовало
                    </Col>

                    <Col>
                      29 из 30
                    </Col>
                  </Row>

                  <button className="proqolosovalo">Проголосовало</button>
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
