import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { Button,Card,Spinner,Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {addToCarts} from './../redux/action'

function Task(props) {
    const products = useSelector(state => state.allProducts.products);

    const dispatch = useDispatch()
    return (
        <>
            <Breadcrumb>
                {props.type ?
                <>
                <Breadcrumb.Item>
                    <Link to={"/products"}>Products</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item active>{props.type}</Breadcrumb.Item>
                </>
                :
                <Breadcrumb.Item active><Link to={"/products"}>Products</Link></Breadcrumb.Item>}
            </Breadcrumb>
            {
                props.type? <h4 className="heading">Showing {props.type} List</h4>
                :<h4 className="heading">Showing Products List</h4>
            }
            <div class="row">
              {Object.keys(products).length === 0 ?
              <div>
                  <Spinner animation="border" role="status">
                      <span className=""></span>
                  </Spinner>
                  <h4>Loading</h4>
              </div>
             : products.map((item,i) => (
              <div className="col-4 col-md-4 col-sm-12" key={i}>
              {props.type?
                  <Card style={{ width: '22rem' }} >
                      <Link to={`${[props.type]}/${item.id}`}>
                      <Card.Img variant="top" src={item.image} />
                      </Link>
                      <Card.Body>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>
                              $ {item.price}
                          </Card.Text>
                           <Card.Text>
                              <Button onClick={()=>dispatch(addToCarts(item))}>Add to Cart</Button>
                          </Card.Text>
                      </Card.Body>
                  </Card>
              : <Card style={{ width: '22rem' }} >
                      <Link to={`products/category/${item.category}/${item.id}`}>
                      <Card.Img variant="top" src={item.image} />
                      </Link>
                      <Card.Body>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>
                              $ {item.price}
                          </Card.Text>
                          <Card.Text>
                              <Button onClick={()=>dispatch(addToCarts(item))}>Add to Cart</Button>
                          </Card.Text>
                      </Card.Body>
                  </Card>}
              </div>
                  ))}
            </div>
        </>
    )
}

export default Task
