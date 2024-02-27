import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Media, Row, Col, List, ListInlineItem } from 'reactstrap';
import { FaRupeeSign } from "react-icons/fa";
import PriceShow from '../PriceShow';
import './style.scss';

//import slice
import { removeProduct } from '../../store/slices/addproductSlice';


const CartView = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const productItems = useSelector(state => state.product.data);
    const addProduct = useSelector(state => state.addProduct)



    const TotalCalculation = () => {
        let sum = addProduct.data.reduce((acc, el) => acc + el.price, 0);
        return Math.floor(sum);
    }


    
    const handleOrderPlace = (e) => {
        e.preventDefault();
        navigate("/Checkout")

    }

    return (

        <Row className='w-100'>
            <Col> {
                addProduct.data.map((el, index) => {
                    return (<Media key={index} className='media_wraper'>
                        <Media left href="#">
                            <img src={el.image} alt="" style={{ width: "100px", height: "100px" }} />
                        </Media>
                        <Media body>
                            <Media heading>
                                {el.title}
                            </Media>
                            <PriceShow data={{ price: el.price, rating: el.rating.rate }} />
                            <Button onClick={() => dispatch(removeProduct(el.id))}>remove</Button>
                        </Media>
                    </Media>
                    )
                })
            }
            </Col>
            <Col>
                <List className='total_warper'>
                    <h4>PRICE DETAILS</h4>
                    <ListInlineItem>Price of items:{addProduct.data.length}</ListInlineItem>
                    <ListInlineItem>Total Amount: <FaRupeeSign style={{ marginTop: "7px" }} />{TotalCalculation()}</ListInlineItem>
                </List>
                <Button onClick={e => handleOrderPlace(e)}>Place the order</Button>
            </Col>
        </Row>


    )
}



export default CartView