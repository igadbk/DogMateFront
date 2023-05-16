import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import signed from '../assets/video/logged.mp4'
import { Link } from "react-router-dom";

export const Logged = () => {
    return (
        <section className="logged" id="logged">
            <Container>
                <div className='logged'>
                    <video src={signed} autoPlay loop muted /> </div>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Cześć
                <h1>XYZ</h1>
                  <p>dobrze cię znowu widzieć!</p>
                    <p><button><Link to="/signup">TWÓJ PANEL</Link></button></p>
                </span></div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Logged