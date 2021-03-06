import React, {Component} from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';

class FooterPage extends Component {
    render(){
        return(
            <Footer color="green" className="font-small pt-4 mt-4">
                <Container className="text-center text-md-left">
                    <Row className="text-center text-md-left mt-3 pb-3">
                        <Col md="3" lg="3" xl="3" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Althaqalayn Cultural Foundation</h6>
                            <p>This is the official website of Althaqalayn Cultural Foundation. An Islamic organisation for teaching and propagating the True teachings of Islam by the school of AhlulBayt (AS), under the guidence and tutelege of his eminence, Sheikh Hamza Muhammad Lawal (h).</p>
                        </Col>
                        <hr className="w-100 clearfix d-md-none"/>
                        <Col md="2" lg="2" xl="2" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Lessons</h6>
                            <p><a href="#!">Hadeeth</a></p>
                            <p><a href="#!">Ulumul Qur'an</a></p>
                            <p><a href="#!">Zubda</a></p>
                            <p><a href="#!">Tahreerul Waseela</a></p>
                        </Col>
                        <hr className="w-100 clearfix d-md-none"/>
                        <Col md="3" lg="2" xl="2" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                            <p><a href="#!">About Us</a></p>
                            <p><a href="#!">Donate</a></p>
                            <p><a href="#!">Help</a></p>
                        </Col>
                        <hr className="w-100 clearfix d-md-none"/>
                        <Col md="4" lg="3" xl="3" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                            <p><i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
                            <p><i className="fa fa-envelope mr-3"></i> info@gmail.com</p>
                            <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                            <p><i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
                        </Col>
                    </Row>
                    <hr/>
                    <Row color="white" className="d-flex align-items-center">
                        <Col md="8" lg="8">
                            <p className="text-center text-md-left black-text">&copy; {(new Date().getFullYear())} Copyright: <a href="#"> Althaqalayn Cultural Foundation </a></p>
                        </Col>
                        <Col md="4" lg="4" className="ml-lg-0">
                            <div className="text-center text-md-right">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-facebook"></i></a></li>
                                    <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-google-plus"></i></a></li>
                                    <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Footer>
        );
    }
}
        
export default FooterPage;