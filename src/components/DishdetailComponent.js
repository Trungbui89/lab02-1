import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
      super(props);
    }
    
    render() {
        const dishDetail = this.props.dish
        if (dishDetail != null){
            const comments = dishDetail.comments.map((comment) => {
                return (
                    <div>
                        <p>{comment.comment}</p>
                        <p>{comment.author}, {comment.date}</p>
                    </div>
                )
            })
            
            return(
                <div className="container">
                    <div className="row">
                        <div key={dishDetail.id} className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg top src={dishDetail.image} alt={dishDetail.name} />
                                <CardBody>
                                    <CardTitle>{dishDetail.name}</CardTitle>
                                    <CardText>{dishDetail.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div key={dishDetail.id} className="col-12 col-md-5 m-1">
                            <Card>
                                <h3>Comment</h3>
                                {comments}
                            </Card>
                        </div>
                    </div>
                </div>
            );
        }
        else
            return(
                <div></div>
            );
    }
}

export default DishDetail;