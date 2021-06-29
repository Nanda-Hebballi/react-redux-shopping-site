import {
  BrowserRouter as Router,
  Switch,
  Route,Link
} from "react-router-dom";

function Welcomepage() {
  return(
    <div>
      <div className="row">
        <div className ="col-12 col-md-12 text-center mt-5 pt-3">
          <h2>Welcome To Our Shopping Site</h2>
        </div>
        <div className ="col-12 col-md-12 text-center mt-1">
          <h4>Click on below button to navigate to our site</h4>
          <button className="button btn-light">
            <Link to="/products">Products</Link>
          </button>
        </div>
      </div>
    </div>
  )

}

export default Welcomepage
