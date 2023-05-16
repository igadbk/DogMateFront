import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import login from '../assets/video/login.mp4'
import { Link } from "react-router-dom";

export const SignUp = () => {
    return (
        <section className="signup" id="signup">
            <Container>
                <div className='signup'>
                    <video src={login} autoPlay loop muted /> </div>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <div className="Auth-form-content">
                            <h3 className="Auth-form-title">ZAŁÓŻ KONTO</h3>
                            <div className="form-group mt-3">
                                <input
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="twoje imię i nazwisko"
                                />
                                <p><label>IMIĘ I NAZWISKO</label></p>
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="twój mail"
                                />
                                <p><label>E-MAIL</label></p>
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="twoje hasło"
                                />
                                <p><label>HASŁO</label></p>
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary">
                                    <Link to="/signup">ZAPISZ</Link>
                                </button>
                            </div>
                        </div>
                        <h2><Link to="/login">MASZ KONTO? ZALOGUJ SIĘ</Link></h2>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SignUp
