import React from 'react';//removed { Component }, and removed class GalleryDetail component.
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';
//Turned renderItem function into it's own functional component, so renamed renderItem function RenderItem.

    function RenderItem({item}) {//get the item in form of props here, so enclose with braces. Defining parameter as object.
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

    function RenderComments({comments}) {//Again, braces in parameter for {comments}
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

//removed render function. Turned into a function component called 
    const GalleryDetail = (props) => {
        if (props.item != null)
            return (
                <div class="container">
                <div className="row">
                    <RenderItem item={props.item} />
                    <RenderComments comments={props.item.comments} />
                </div>
                </div>
            );
        else
            return (
                <div> </div>
            )
    }

export default GalleryDetail;