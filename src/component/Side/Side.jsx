import React from "react";
import { Container, Nav, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router";
//import '../pages/style/Dashboard.css';
import school from '../../assets/school.png';
import ListGroup from 'react-bootstrap/ListGroup';
import main from '../../assets/leftside-img/main.png';
import s from './Site.module.css';
import btn from '../../assets/btn.png';
import icon from '../../assets/icon.png';
import v from '../../assets/version.png'
import chat from '../../assets/leftside-img/chat.png'
import finance from '../../assets/leftside-img/finance.png'
import kalendar from '../../assets/leftside-img/kalendar.png'
import qolosovanie from '../../assets/leftside-img/qolosovanie.png'
import priqlawenie from '../../assets/leftside-img/priqlawenie.png'
import obwiy from '../../assets/leftside-img/obwiy.png'
import rating from '../../assets/leftside-img/rating.png'
import meropriyatie from '../../assets/leftside-img/meropriyatie.png'

const Side = props => {
    return (
        <div className={s.all}>
            <h3>Родительский комитет <span>.</span></h3>

            <Container className={s.schooldiv}>
                <Row>
                    <Col lg={3}>
                        <img src={school} alt="" />
                    </Col>
                    <Col lg={6}>
                        <p className={s.school_parag}>МБОУ СОШ № 316</p>
                        <p>5 «‎Б» </p>
                    </Col>
                    <Col lg={3}>
                        <button className="btnclick">
                            <img src={btn} />
                        </button>
                    </Col>
                </Row>
            </Container>

            <ListGroup variant="flush">
                <ListGroup.Item action >
                    <img src={main} />
                     Главная
                  </ListGroup.Item>
                <ListGroup.Item action>
                    <img src={chat} />
                    Чат
                  </ListGroup.Item>
                <ListGroup.Item action >
                    <img src={finance} />
                     Финансы
                  </ListGroup.Item>
                <ListGroup.Item action >
                    <img src={kalendar} />
                     Календарь
                  </ListGroup.Item>
                <ListGroup.Item action >
                    <img src={main} />
                     Файл менеджер
                  </ListGroup.Item>
                <ListGroup.Item action >
                    <img src={qolosovanie} />
                     Голосование
                  </ListGroup.Item>
                <ListGroup.Item action >
                    <img src={obwiy} />
                     Список детей
                  </ListGroup.Item>
                <ListGroup.Item action >
                    <img src={obwiy} />
                     Список родителей
                  </ListGroup.Item>
                <ListGroup.Item action >
                    <img src={meropriyatie} />
                     Мероприятия
                  </ListGroup.Item>
                <ListGroup.Item action >
                    <img src={rating} />
                     Рейтинг
                  </ListGroup.Item>
                <ListGroup.Item action >
                    <img src={priqlawenie} />
                     Приглашения
                  </ListGroup.Item>
            </ListGroup>

            <Container className={s.schooldiv}>
                <Row>
                    <Col>
                        <img src={icon} alt="" />
                    </Col>
                    <Col lg={7}>
                        <p className={s.school_parag}>МБДОУ Детский сад «Единорог»</p>
                        {/* <p>5 «‎Б» </p>
                        <p>Класс</p> */}
                    </Col>
                    <Col>
                        <img src={btn} />
                    </Col>
                </Row>
            </Container>


            <Container className="">
                <button className={s.btn_version}>
                    <img src={v} />
                    Версия 2.1</button>
            </Container>
        </div>
    );
};

export default Side;