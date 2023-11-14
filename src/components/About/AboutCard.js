import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        <div>
                            <div>
                                <span role="img" aria-label="rocket">🚀</span> Open to New Opportunities <span role="img" aria-label="star">🌟</span> Passionate Tech Enthusiast <span role="img" aria-label="laptop">💻</span>
                            </div>
                            <br />
                            <p>
                                Hello there! I'm <span className="purple">Abhishek Singh </span>, a forward-thinking tech enthusiast with a keen eye for innovation and a passion for problem-solving. Currently exploring new opportunities where I can leverage my expertise in technology to drive impactful solutions.
                            </p>

                            <div>
                                <span role="img" aria-label="lightbulb">💡</span> What drives me?
                                <p>
                                    I'm fueled by the challenge of creating elegant technical solutions to real-world problems. From coding and development to [Other Relevant Areas], I'm driven by a relentless curiosity for exploring emerging technologies and turning innovative ideas into reality.
                                </p>
                            </div>
                            <div>
                                <span role="img" aria-label="world map">🌐</span> My Expertise:
                                <ul>
                                    <li>Proficient in [Key Programming Languages/Frameworks/Tools]</li>
                                    <li>Skilled in [Specific Skills or Technologies]</li>
                                    <li>Experience in [Relevant Experience or Projects]</li>
                                    <li>Passion for [Area of Interest or Specialization]</li>
                                </ul>
                            </div>
                            <div>
                                <span role="img" aria-label="star">🌟</span> Why work with me?
                                <p>
                                    I thrive in collaborative environments and love being part of a team that's passionate about creating remarkable products. My ability to communicate complex ideas in a clear and concise manner makes me an asset in cross-functional teams.
                                </p>
                            </div>
                            <div>
                                <span role="img" aria-label="seedling">🌱</span> What's Next?
                                <p>
                                    I'm eagerly seeking new opportunities where I can contribute my skills and learn from a dynamic, innovative team. Let's connect and explore how my expertise aligns with your vision!
                                </p>
                            </div>
                        </div></p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Playing Cricket
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Writing Tech Blogs
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Travelling
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Listening song
                        </li>
                    </ul>
                    <br />
                    <p style={{ color: "rgb(155 126 172)" }}>
                        "
                        जो बादलो पर रखा नजर तो तू फलक ही पाएगा!"{" "}
                    </p>
                    <footer className="blockquote-footer">AbhiBhi</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
