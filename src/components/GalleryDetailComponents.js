import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, Modalheader, Form, FormGroup, Label, Col, Row, FormFeedback, Input, ModalHeader } from 'reactstrap';
import React, { Component } from 'react';//removed { Component }, and removed class GalleryDetail component.
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
//Turned renderItem function into it's own functional component, so renamed renderItem function RenderItem.

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

function RenderItem({ item }) {//get the item in form of props here, so enclose with braces. Defining parameter as object.
    if (item != null) {//check if item not equal to null. So, obviously if the item is not null, only then I will render the item. Otherwise, I will simply return a div, an empty div here.
        return (
            //card component
            <div className="col-sm-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    else
        return (
            <div></div>//empty div
        );
}

function RenderComments({ comments, addComment, itemId }) {//Again, braces in parameter for {comments}
    if (comments != null)
        return (
            <div className="col-sm-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <p>--{comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                                <p>--{comment.comment}</p>
                            </li>
                        );
                    })}
                </ul>
                <React.Fragment>
                    <CommentForm itemId={itemId} addComment={addComment} />
                </React.Fragment>
            </div>
        );

    else {
        return (
            <div>

            </div>
        );
    }
}

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.itemId, values.rating, values.author, values.comment);
    }

    render() {
        return (
            <React.Fragment>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select name="rating" id="rating" model=".rating">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="author">Your Name</Label>
                                <Control.text name="author" id="author" placeholder="Your Name" model=".author" validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea name="comment" id="comment" model=".comment" />
                            </FormGroup>
                            <Button type="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
                <Button outline onClick={this.toggleModal}>Submit comment</Button>
            </React.Fragment>
        );
    }
}

//removed render function. Turned into a function component called 
const GalleryDetail = (props) => {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.item != null)
        return (
            <div class="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/Gallery'>Gallery</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.item.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.item.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderItem item={props.item} />
                    <RenderComments comments={props.comments}
                        postComment={props.postComment}
                        itemId={props.item.id} />
                </div>
            </div>
        );
    else
        return (
            <div></div>
        );
}
export default GalleryDetail;