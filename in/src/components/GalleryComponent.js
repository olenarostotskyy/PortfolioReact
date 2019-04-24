import React, { Component } from 'react';

import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import ItemDetail from './GalleryDetailComponents';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: null
        }
    }
        
            onItemSelect(item) {
                this.setState({ selectedItem: item});
            }
        
            renderItem(item) {
                if (item != null)
                    return(
                        //card cvomponent
                <Card>
                <CardImg width="100%" src={item.image} alt={item.name} />
                <CardBody>
                  <CardTitle>{item.name}</CardTitle>
                  <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return(
            <div></div>//empty div
        );
}

render() {
    const menu = this.props.items.map((item) => {
        return (
          <div className="col-12 col-md-5 m-1">
            <Card key={item.id}
              onClick={() => this.onItemSelect(item)}>
              <CardImg width="100%" src={item.image} alt={item.name} />
              <CardImgOverlay>
                  <CardTitle>{item.name}</CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
        );
    });//m-1. Meaning, one unit margin all around in here. So by doing this, what I am doing to this div is, for the extra small to small screen sizes,
    

                
    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
            
            <ItemDetail item={this.state.selectedItem}/>
        </div>
    );
}
}

    

   


export default Menu;