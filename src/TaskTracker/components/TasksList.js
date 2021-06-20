import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import axios from 'axios';
import {setproducts,removeproducts} from './../redux/action'
import Task from './Task';
import { useParams } from 'react-router-dom';

function TasksList() {
    const products = useSelector(state => state.allProducts.products);
    const dispatch = useDispatch();

    const {type } = useParams();

     const bindings = {
        'electronics':'electronics',
        'jewelery':'jewelery',
        'mens':`men's%20clothing`,
        'womens':`women's%20clothing`
    }


    useEffect(() => {
        fetchProducts()
        // return()=>{
        //     dispatch(removeproducts())
        // }
    }, [type]);
    console.log(products)

    const fetchProducts =  () =>{
        let url = '';
        if(type){
            url =`https://fakestoreapi.com/products/category/${bindings[type]}`
        }else{
            url = 'https://fakestoreapi.com/products'
        }

        axios.get(url).then(function (response) {
            // handle success
            dispatch(setproducts(response.data))
            console.log(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    return (
        < >
             <Task type = {type}/>
        </>
    )
}

export default TasksList
