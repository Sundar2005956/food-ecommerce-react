import '../pages/styles.css'
import support from '../images/support.svg'
import healthy from '../images/healthy-food.svg'
import bar from '../images/bar.svg'
import chefhat from '../images/chef-hat.svg'
import delivery from '../images/delivery.svg'
import discount from '../images/discount.svg'
import products from '../images/products.svg'
import serve from '../images/serve.svg'
import service from '../images/service.svg'
import team from '../images/team.svg'
import token from '../images/token.svg'
import vegan from '../images/vegan.svg'


function Service() {
    return (<>
        <h1 style={{ textAlign: "center" }} id='service-heading'>Services</h1>
        <div className="service">
            <div className="service1">
                <img src={support} alt="no image" />
                <h3>Free Support</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut fugiat culpa, </p>
            </div>
            <div className="service1">
                <img src={healthy} alt="no image" />
                <h3>Fresh Healthy Food</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut fugiat culpa, </p>
            </div>
            <div className="service1">
                <img src={serve} alt="no image" />
                <h3>Fast Serve On Table</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut fugiat culpa, </p>
            </div>
            <div className="service1">
                <img src={delivery} alt="no image" />
                <h3>Quick Delivery</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut fugiat culpa, </p>
            </div>
            <div className="service1"> 
                <img src={chefhat} alt="no image" />
                <h3>Best Chef</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut fugiat culpa, </p>
            </div>
            <div className="service1"> 
                <img src={token} alt="no image" />
                <h3>Order Token</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut fugiat culpa, </p>
            </div>
            <div className="service1"> 
                <img src={service} alt="no image" />
                <h3>Table Service</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut fugiat culpa, </p>
            </div>
            <div className="service1"> 
                <img src={bar} alt="no image" />
                <h3>Best Bar</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut fugiat culpa, </p>
            </div>
            <div className="service1"> 
                <img src={discount} alt="no image" />
                <h3>Discount Voucher</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut fugiat culpa, </p>
            </div>
            <div className="service1">
                <img src={team} alt="no image" />
                <h3>Awesome Team</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut fugiat culpa, </p>
            </div>
            <div className="service1">
                <img src={products} alt="no image" />
                <h3>Fresh Products</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut fugiat culpa, </p>
            </div>
            <div className="service1">
                <img src={vegan} alt="no image" />
                <h3>Vegan Cuisine</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut fugiat culpa, </p>
            </div>
        </div>
    </>)
}
export default Service