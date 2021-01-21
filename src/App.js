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
import birthday from './assets/birthday.png'
import priz from './assets/priz.png'
import ru from './assets/ru.png'
import vector from './assets/Vector.png';

const now = 27;
const progressInstance = <ProgressBar now={now} label={`${now}%`} srOnly />;

const percent = 0;
const progressBar = <ProgressBar className="progress" percent={percent} label={`${percent}%`} srOnly />;

const percent2 = 100;
const progressBar2 = <ProgressBar now={percent2} srOnly />;

function App() {
  return (
    <div className="App">
      <>
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

            <Row className="lefttop">
              <Col lg={7}>
                <Row>
                  <Col>
                    <div className="budget vorall">
                      <Row>
                        <Col lg={10}>
                          <h3>Бюджет</h3>
                        </Col>
                        <Col>
                          <button className="btnclick">
                            <img src={budgetbtn} />
                          </button>
                        </Col>
                      </Row>
                      <h2>63 000,000 R</h2>

                      {progressBar2}

                      <Row>
                        <Col lg={9}>
                          <img src={kalendar} />
                          <span>Период</span>: год
                          </Col>
                        <Col>
                          <span>100%</span>
                        </Col>
                      </Row>
                    </div>
                  </Col>

                  <Col>
                    <div className="rasxodi vorall">
                      <Row>
                        <Col lg={10}>
                          <h3>Расходы</h3>
                        </Col>
                        <Col>
                          <button className="btnclick">
                            <img src={budgetbtn} />
                          </button>
                        </Col>
                      </Row>
                      <h2>0,00 R</h2>

                      {progressBar}

                      <Row>
                        <Col lg={10}>
                          <img src={kalendar} />
                          <span>Период</span>: месяц
                          </Col>
                        <Col>
                          <span>0%</span>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
                <Row className="secondrow">
                  <Col className="">
                    <div className="balans_v_budjete vorall">
                      <Row>
                        <Col lg={10}>
                          <h3>Баланс <br /> в бюджете</h3>
                        </Col>
                        <Col>
                          <button className="btnclick">
                            <img src={budgetbtn} />
                          </button>
                        </Col>
                      </Row>
                      <h2>1 500,00 R</h2>

                      {progressBar}

                      <Row>
                        <Col lg={10}>
                          <img src={kalendar} />
                          <span>Период</span>: месяц
                          </Col>
                        <Col>
                          <span>0%</span>
                        </Col>
                      </Row>
                    </div>
                  </Col>

                  <Col>
                    <div className="rasxodi_na_meropriyatiya vorall">
                      <Row>
                        <Col lg={10}>
                          <h3>Расходы на мероприятия</h3>
                        </Col>
                        <Col>
                          <button className="btnclick">
                            <img src={budgetbtn} />
                          </button>
                        </Col>
                      </Row>
                      <h2>2 350,00 R</h2>

                      {progressBar}

                      <Row>
                        <Col lg={10}>
                          <img src={kalendar} />
                          <span>Период</span>: год
                          </Col>
                        <Col>
                          <span>0%</span>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>

                <Row className="secondrow">
                  <Col>
                    <div className="meropriyatiya vorall">
                      <Row>
                        <Col lg={10}>
                          <h3>Мероприятия</h3>
                        </Col>
                        <Col>
                          <button className="btnclick">
                            <img src={budgetbtn} />
                          </button>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg={1}><img src={birthday} className="meromriyatiyaimg" /> </Col>
                        <Col lg={2} className="meromriyatiyafont">28</Col>
                        <Col lg={2}>дней рождения</Col>
                      </Row>
                      <hr />
                      <Row>
                        <Col lg={1}><img src={priz} className="meromriyatiyaimg" /> </Col>
                        <Col lg={2} className="meromriyatiyafont">28</Col>
                        <Col lg={2}>организованных мероприятий</Col>
                      </Row>
                      <hr />
                      <Row>
                        <Col lg={1}><img src={ru} className="meromriyatiyaimg" /> </Col>
                        <Col lg={2} className="meromriyatiyafont">28</Col>
                        <Col lg={2}>официальных праздников</Col>
                      </Row>

                      <hr />
                      <Row>
                        <Col lg={9}>
                          <img src={kalendar} />
                          <span>Период</span>: год
                          </Col>
                        <Col>
                        </Col>
                      </Row>
                    </div>
                  </Col>

                  <Col>
                    <div className="balans_na_pitanii vorall">
                      <Row>
                        <Col lg={10}>
                          <h3>Баланс <br /> на питании</h3>
                        </Col>
                        <Col>
                          <button className="btnclick">
                            <img src={budgetbtn} />
                          </button>
                        </Col>
                      </Row>
                      <h2>500,00 R</h2>

                      {progressBar}

                      <Row>
                        <Col lg={10}>
                          <img src={kalendar} />
                          <span>Период</span>: год
                          </Col>
                        <Col>
                          <span>0%</span>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>

                <div className="mediafile">
                  <h3>Медиафайлы</h3>

                  <h1>Тут загружаются файлы</h1>

                  <Row>
                    <Col lg={10}>
                      Объём хранилища
                    </Col>
                    <Col>
                      <span className="obyem">3 из 8 Gb</span>
                    </Col>
                  </Row>

                  {progressInstance}
                </div>
              </Col>


              <Col lg={5} className="rightside">
                <div className="kalendar">

                  <Row>
                    <Col lg={11}>
                      <h3 className="rightfont">Календарь мероприятий</h3>
                    </Col>
                    <Col>
                      <button className="btnclick">
                        <img src={budgetbtn} />
                      </button>
                    </Col>
                  </Row>
                  <h5 className="rightfont">Поход в музей геологии</h5>
                  <p>Поход увлекательное путишествие в музей геологии. Неовобращимые впеатления и буря эмоций.</p>

                  <img src={komitet} className="rightimg" />

                  <Row>
                    <Col lg={1}>
                      <img src={kalendar} />
                    </Col>
                    <Col lg={8}>
                      Дата <br />
                      17 января
                    </Col>
                    <Col>
                      Время
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={1}>
                      <img src={vector} />
                    </Col>
                    <Col lg={8}>
                      Место
                    </Col>

                    <Col>
                      Стоимость
                      <br />
                      700 R
                  </Col>
                  </Row>

                  <p className="users">Уже идут 17 детей</p> <br />

                </div>
                <button className="allmerop">Все мероприятия</button>

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

                  <button className="proqolosovalo">Проголосовать</button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    </div>
  );
}

export default App;
