import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';
//md means for medium to extra large screen size of this label will occupy two columns in this row.
//htmlFor, because "for" alone would be confused with JavaScript's for.
//turned function Contact component into a class component.


class Contact extends Component {//need state in component, so put constructor.

    constructor(props) {
        super(props);

        this.state = {//set up properties within state that will be linked to form.
            name: '',
            email: '',
            subject: '',
            agree: false,
            message: '',
            touched: {  //keep track if a field is touched or not. Store a boolin value to indicate if that form value has been touched or not.
                name: false,
                email: false,
                subject: false
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleInputChange(event) {//implementing 2 diff handlers that will help change the state of compenent to gather info submitted.
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({//any change that is done in the input boxes will result in a state being changed.
            [name]: value
        });
    }//invoked on any change to our value in our form.

    handleSubmit(event) {
        console.log("Current State is: " + JSON.stringify(this.state));
        alert("Current State is: " + JSON.stringify(this.state));
        event.preventDefault();//to make use of this handleSubmit, go to form and do Form onsubmit.
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }//if that state is touched, I'm gonna modify that field and set to true. To track which input box has been modified.
        });
    }

    validate(name, email, subject) {
        const errors = {//JavaScript ojbect called errors, which contains the message corresponding to the 3 values. Will be sent to error message.
            name: '',
            email: '',
            subject: ''
        };

        if (this.state.touched.name && name.length < 3)
            errors.name = 'Name should be >= 3 characters';
        else if (this.state.touched.name && name.length > 40)
            errors.name = 'Name should be >= 40 characters';

        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';

        if (this.state.touched.subject && subject.length < 3)
            errors.subject = 'Subject should be >= 3 characters';
        else if (this.state.touched.subject && subject.length > 40)
            errors.subject = 'Subject should be >= 15 characters';

        return errors;
    }

        render() {//implementing controlled form in bottom div.
            const errors = this.validate(this.state.name, this.state.email, this.state.subject);
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
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor="name" md={2}>Name</Label>
                            <Col md={10}>
                                <Input type="text" id="name" name="name"
                                    placeholder="Name"
                                    value={this.state.name}
                                    valid={errors.name === ''}
                                    invalid={errors.name !== ''}
                                    onBlur={this.handleBlur('name')}//indicate the field we are validating. Invoke the onBlur.
                                    onChange={this.handleInputChange} />
                                <FormFeedback>{errors.name}</FormFeedback>
                            </Col>
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Input type="text" id="email" name="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    valid={errors.email === ''}
                                    invalid={errors.email !== ''}
                                    onBlur={this.handleBlur('email')}
                                    onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="subject" md={2}>Subject</Label>
                                <Col md={10}>
                                    <Input type="text" id="subject" name="subject"
                                        placeholder="Subject"
                                        value={this.state.subject}
                                        valid={errors.subject === ''}
                                        invalid={errors.subject !== ''}
                                        onBlur={this.handleBlur('subject')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.subject}</FormFeedback>
                                </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="message" md={2}>Message</Label>
                            <Col md={10}>
                                <Input type="textarea" id="message" name="message"
                                    rows="12"
                                    value={this.state.message}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size: 5, offset: 6}}>
                                <Button type="submit" color="success">
                                Send
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
            </div>
        );
    }

}

export default Contact;