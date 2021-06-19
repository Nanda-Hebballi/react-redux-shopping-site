import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button,Card,Figure,Spinner } from 'react-bootstrap';
import {setproduct,removeproduct} from './../redux/action'
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TaskDetail() {
    let { id } = useParams();
    let { type } = useParams();
    const product = useSelector(state => state.product);
    const dispatch = useDispatch()

    useEffect(() => {
        fetchProducts()
        return()=>{
            dispatch(removeproduct())
        }
    }, []);
    console.log(product)

    const fetchProducts =  () =>{
       const res =  axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(function (response) {
            // handle success
            dispatch(setproduct(response.data))
            console.log(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    return (
        <div>
         {Object.keys(product).length === 0 ? null:
            <>
            <Breadcrumb>
                <>
                <Breadcrumb.Item>
                    <Link to={"/products"}>Products</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item ><Link to={`/products/category/${type}`}>{type}</Link></Breadcrumb.Item>
                <Breadcrumb.Item active>{product.title}</Breadcrumb.Item>
                
                </>
            </Breadcrumb>
            </>}
           <div className="col-2 col-md-2 col-sm-12"></div>
           <div className="col-8 col-md-8 col-sm-12">
             {Object.keys(product).length === 0 ? 
                <div>
                    <Spinner animation="border" role="status">
                        <span className=""></span>
                    </Spinner>
                    <h4>Loading</h4>
                </div>:
                <Figure>
                    <Figure.Image
                        width={500}
                        height={800}
                        
                        src={product.image}
                    />
                    <Figure.Caption>
                        {product.title}
                    </Figure.Caption>
                    <h5>{product.description}</h5>
                    <h5>$ {product.price}</h5>
                </Figure>
            }
            </div>
            <div className="col-2 col-md-2 col-sm-12"></div>        
        </div>
    )
}

export default TaskDetail
