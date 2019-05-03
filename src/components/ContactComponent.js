import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';//removed Form, FormGroup, Input, FormFeedback
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
//md means for medium to extra large screen size of this label will occupy two columns in this row.
//htmlFor, because "for" alone would be confused with JavaScript's for.
//turned function Contact component into a class component.


class Contact extends Component {//need state in component, so put constructor.

    constructor(props) {
        super(props);
        //deleted this.state and properties, because we are calling it from react-redux-form now.
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //deleted handleInputChange(event) { because it'll be managed by react-redux-form on our behalf.

    handleSubmit(values) {//changed handSubmit to recieve values.
        console.log("Current State is: " + JSON.stringify(values));//no longer have the state in here, so changed this.state to values.
        alert("Current State is: " + JSON.stringify(values));
        //event.preventDefault(); is no longer needed.
    }
    //deleted handleBlur = (field) => () => { because taken care of by react-redux-form.
    //also deleted  validate(name, email, subject) { for same reason as above.

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            Sumner,<br />
                            Washington<br />
                            USA<br />
                            <i className="fa fa-phone"></i>: +142 5366 9304<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="olenazachkow@gmail.com">olenazachkow@gmail.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+14253669304"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:olenazachkow@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Get in Touch</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="name" md={2}>Name</Label>
                                <Col md={10}>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Name"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="subject" md={2}>Subject</Label>
                                <Col md={10}>
                                    <Control.text model=".subject" id="subject" name="subject"
                                        placeholder="Subject" 
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Message</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 5, offset: 6 }}>
                                    <Button type="submit" color="success">
                                        Send
                                </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );//replaced <FormGroup row> with <Row className="form-group">
    }//removed all the <FormFeedback> and changed with
//changed <input> to 
}

export default Contact;