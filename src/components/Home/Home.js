
import Particle from "../Particle";
import homeLogo from "../../images/logo.png";
import Type from "./Type";
import React from "react";
import 'E:/My Portfolio/my-portfolio/src/index.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import myImg from "../../Assets/avatar.svg";

function Home() {
    return (<div className="Parallax">
        <Parallax pages={2} style={{ top: '0', left: '0' }} class="animation">
            <ParallaxLayer offset={0} speed={0.25}>
                <div class="animation_layer parallax" id="artback"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.3}>
                <div class="animation_layer parallax" id="mountain"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={-0.1}>
                <div class="animation_layer parallax" id="logoland"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.3}>
                <div class="animation_layer parallax" id="jungle1"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.35}>
                <div class="animation_layer parallax" id="jungle2"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.5}>
                <div class="animation_layer parallax" id="jungle3"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.45}>
                <div class="animation_layer parallax" id="jungle4"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.40}>
                <div class="animation_layer parallax" id="manonmountain"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.33}>
                <div class="animation_layer parallax" id="jungle5"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.20}>
                <div id="Home">

                    <section>
                        <Container fluid className="home-section" id="home">
                            <Particle />
                            <Container className="home-content">
                                <Row>
                                    <Col md={7} className="home-header">
                                        <h1 style={{ paddingBottom: 15 }} className="heading">
                                            Hi There!{" "}
                                            <span className="wave" role="img" aria-labelledby="wave">
                                                👋🏻
                                            </span>
                                        </h1>

                                        <h1 className="heading-name">
                                            I'm
                                            <strong className="main-name"> Abhishek Singh</strong>
                                        </h1>

                                        <div style={{ padding: 50, textAlign: "left" }}>
                                            <Type />

                                        </div>
                                    </Col>

                                    <Col md={5} style={{ paddingBottom: 20 }}>
                                        <img
                                            src={homeLogo}
                                            alt="home pic"
                                            className="img-fluid"
                                            style={{ maxHeight: "450px" }}
                                        />
                                    </Col>
                                </Row>
                            </Container>
                        </Container>
                        <Container fluid className="home-about-section" id="about">
                            <Container>
                                <Row>
                                    <Col md={8} className="home-about-description">
                                        <h1 style={{ fontSize: "2.6em" }}>
                                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                                        </h1>
                                        <p className="home-about-body">
                                            I fell in love with programming and I have at least learnt
                                            something, I think… 🤷‍♂️
                                            <br />
                                            <br />I am fluent in classics like
                                            <i>
                                                <b className="purple"> C++, Javascript and Go. </b>
                                            </i>
                                            <br />
                                            <br />
                                            My field of Interest's are building new &nbsp;
                                            <i>
                                                <b className="purple">Web Technologies and Products </b> and
                                                also in areas related to{" "}
                                                <b className="purple">
                                                    Blockchain.
                                                </b>
                                            </i>
                                            <br />
                                            <br />
                                            Whenever possible, I also apply my passion for developing products
                                            with <b className="purple">Node.js</b> and
                                            <i>
                                                <b className="purple">
                                                    {" "}
                                                    Modern Javascript Library and Frameworks
                                                </b>
                                            </i>
                                            &nbsp; like
                                            <i>
                                                <b className="purple"> React.js and Next.js</b>
                                            </i>
                                        </p>
                                    </Col>
                                    <Col md={4} className="myAvtar">
                                        <img src={myImg} className="img-fluid" alt="avatar" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12} className="home-about-social">
                                        <h1>FIND ME ON</h1>
                                        <p>
                                            Feel free to <span className="purple">connect </span>with me
                                        </p>
                                        <ul className="home-about-social-links">
                                            <li className="social-icons">
                                                <a
                                                    href="https://github.com/soumyajit4419"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="icon-colour  home-social-icons"
                                                >
                                                    <AiFillGithub />
                                                </a>
                                            </li>
                                            <li className="social-icons">
                                                <a
                                                    href="https://twitter.com/Soumyajit4419"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="icon-colour  home-social-icons"
                                                >
                                                    <AiOutlineTwitter />
                                                </a>
                                            </li>
                                            <li className="social-icons">
                                                <a
                                                    href="https://www.linkedin.com/in/soumyajit4419/"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="icon-colour  home-social-icons"
                                                >
                                                    <FaLinkedinIn />
                                                </a>
                                            </li>
                                            <li className="social-icons">
                                                <a
                                                    href="https://www.instagram.com/soumyajit4419"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="icon-colour home-social-icons"
                                                >
                                                    <AiFillInstagram />
                                                </a>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Container>
                        </Container>
                    </section>
                </div>
            </ParallaxLayer>
        </Parallax>


    </div>

    );
}

export default Home;