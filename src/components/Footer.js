import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container className="footer ">
            <Row>
                <Col md="4" className="footer-copywright align-middle">
                    <h3>Designed and Developed by AbhiBhi</h3>
                </Col>
                <Col md="4" className="footer-copywright align-middle">
                    <h3>Copyright © {year} </h3>
                </Col>
                <Col md="4" className="footer-body align-middle">
                    <ul className="footer-icons ">
                        <ul className="social-icons ">
                            <a
                                href="https://github.com/abhib4311"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub />
                            </a>
                        </ul>
                        <ul className="social-icons ">
                            <a
                                // href="#"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiOutlineTwitter />
                            </a>
                        </ul>
                        <ul className="social-icons ">
                            <a
                                href="https://www.linkedin.com/in/abhishek-singh-7b442622a"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>
                        </ul>
                        <ul className="social-icons ">
                            <a
                                href="https://www.instagram.com/abhi_bhi._/"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillInstagram />
                            </a>
                        </ul>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
