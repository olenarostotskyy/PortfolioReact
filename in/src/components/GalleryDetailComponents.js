import React, { Component } from 'react';

import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Col, Row, FormFeedback
} from 'reactstrap';

class GalleryDetail extends Component {
    constructor(props) {
        super(props);

    }

    renderItem(item) {
        if (item != null) {//check if dish not equal to null. So, obviously if the dish is not null, only then I will render the dish. Otherwise, I will simply return a div, an empty div here. S
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


    renderComments(comments) {
        if (comments != null)
            return (
                <div className="col-sm-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return (
                                <li key={comment.id}>
                                    <p>--{comment.author},{new Intl.DateTimeFormat('en-US', {year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                    <p>--{comment.comment}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );

        else {
            return (
                <div>

                </div>
            );
        }
    }


    render() {
        const item = this.props.item;
        if (item != null)
            return (
                <div class="container">
                <div className="row">
                    {this.renderItem(item)}
                    {this.renderComments(item.comments)}
                </div>
                </div>
            );
        else
            return (
                <div> </div>
            )
    }
}

export default GalleryDetail;