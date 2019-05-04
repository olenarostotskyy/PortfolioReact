//added a HomeComponent to application
import React from 'react';
import { Loading } from './LoadingComponent';
import { Card, CardImg, CardTitle, CardBody, CardSubtitle, CardText } from 'reactstrap';

function RenderCard({item, isLoading, errMess}) {
    
    if (isLoading) {
        return(
                <Loading />
        );
    }
    else if (errMess) {
        return(
                <h4>{errMess}</h4>
        );
    }
    else 
        return(
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );

}
//defining Home component as a function component.
function Home(props) {
    return(
        <div className="container">
        <RenderCard item={props.item} 
            isLoading={props.itemsLoading} 
            errMess={props.itemsErrMess}  />
            <h4>Home</h4>
        </div>
    );
}

export default Home;