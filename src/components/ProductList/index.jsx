import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import './style.scss';


//import productslice
import { addProduct } from '../../store/slices/addproductSlice';
import { getProductList } from '../../store/API/productData';
import PriceShow from '../PriceShow';

const index = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.product);


    //use dispatch to addtocart
    const addToCart = (e, elem) => {
        e.preventDefault();
        dispatch(addProduct(elem));
        navigate("/cart")
    }

    useEffect(() => {
        dispatch(getProductList());
    }, [dispatch]);

    return (
        <div className='productList_wrapper'>
            <Row>
                {data.data.map((el, index) =>
                    <Col sm="3" key={index}>
                        <Card>
                            <CardImg top width="100%" src={el.image} alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">{el.title}</CardTitle>
                                <PriceShow data={{ price: el.price, rating: el.rating.rate }} />
                                <Button onClick={(e) =>addToCart(e,el)}>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                )}
            </Row>
        </div>
    )
}

export default index