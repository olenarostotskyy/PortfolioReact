import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { Link } from 'react-router-dom';
//GalleryComponent and GalleryDetailComponent purely work on the props they are passed into.
//They are not maintaining any local state, so they are good candidates for being turned into functional components.
//cleaned up code that we don't need anymore.
//Pulled rendering card into its own functional component.
//Removed class component, and render. No longer necessary.
//Pulled out card from view and made into its own functional component.
//Recieve props as parameter inside RendMenuItem(props), but if you know what
//you're going to be recieving to your props, so you can type within braces. 
//because it's a JavaScript process object. So, you can specify the various properties
//that are going to come in as part of the JS object in here, so ({item, onClick}).
//then return a view here.
//in Card onClick, removed this.props.onClick, and just can be .onClick, bc onClick is being recieved as props in RenderMenuItem.

    function RenderMenuItem({ item, onClick }) {
        return(
            <Card>
              <CardImg width="100%" src={item.image} alt={item.name} />
                <CardImgOverlay>
                    <CardTitle>{item.name}</CardTitle>
                </CardImgOverlay>
            </Card>//Reactstrap card format being rendered in the view here.
        );
    }

    const Menu = (props) => {

        const menu = props.items.items.map((item) => {
            return (
                <div key={item.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem item={item} />
                </div>//div will construct a list of all gallery items
        );
    });//took out m-1, that meant one unit margin all around in here. So by doing this, what I am doing to this div is, for the extra small to small screen sizes,
    if (props.items.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.items.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.items.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else      
    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>//GalleryComponent no longer used by GalleryDetailComponent, so remove
    );
    }


export default Menu;