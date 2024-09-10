import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "./CSS/Checkout.css"
import { DataContext } from '../../components/StoreProvider/Store';
import { useContext, useEffect, useState } from 'react';
export default function Checkout(){
    const {foodlist, Hnumber, subprice, setSubprice, Change} = useContext(DataContext);
    
    const [taxes, setTaxes] = useState(0);
    const [totalprice, setTotalprice] = useState(0);
    const [isOrder, setIsorder] = useState(false);
    const [isPhone, setIsphone] = useState(false);
    const [phonenumber, setPhonenumber] = useState("");
    function handleChangeQuantity(data, index, event){
        Change(data, index, event);
    }
    function handleBlur(){
        let string = phonenumber;
        if(string.trim() === "" || string.trim().length !== 12 || 
            isNaN(parseFloat(string.slice(0,3))) || isNaN(parseFloat(string.slice(4,7))) || isNaN(parseFloat(string.slice(8))) || string[3] !== "-" || string[7] !== "-"){
            setIsphone(true);
        }
        else{
            setIsphone(false);
        }
    }
    function handleorder(){
        setIsorder(true);
    }
    
    useEffect(()=>{
        let sum = 0
        let total = foodlist.reduce((acc, cur) => acc + (cur.quantity * cur.price), sum);
        setSubprice(total);
    }, [foodlist])

    useEffect(() =>{
        let price = subprice;
        let tax = price * 0.13; 
        let total = price + tax;
        setTaxes(tax.toFixed(2));
        setTotalprice(total.toFixed(2));
    }, [subprice])
    
    
    return (
        <>
        <header className="title">
            <Link to="/" className='link'>
                <div className="title_container">
                    Little Sichuan
                </div>
            </Link>
            <div className="title_right">
                <div className="cart_button"><button><FontAwesomeIcon icon={faShoppingCart}/><span>Cart - {Hnumber}</span></button></div>
            </div>
        </header>
        <div className="your-order">
        {isOrder?
            <div className='complete-container'>
                <div className='complete-container-icon'>
                    <FontAwesomeIcon icon={faCheckCircle}/>
                </div>
                <div className='complete-container-text'>
                    <p>You have successfully submit your order! Thank you!</p>
                </div>
            </div>
            :  
            <div className="your-order-container">
                <div className='your-order-title'>
                    <h3>Your Order</h3>
                </div>
                <div className='your-order-list'>
                    {foodlist.map((data, index) => (
                        <li key={index} className='cart-item'> 
                            <div>
                                <label htmlFor="quantity">
                                    <select value={data.quantity} name="quantity" id="quantity" onChange={(event) => handleChangeQuantity(data, index, event)}>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <FontAwesomeIcon icon={faAngleDown}/>
                                    </select>
                                </label>
                            </div>
                            <div className='item-name-and-item-price'>
                                <p>{data.name}</p>
                                <span>${data.price}</span>
                            </div>
                        </li>    
                    ))}
                </div>
                <div className='your-order-info'>
                    <p className='your-order-info-subtotal'>Subtotal <span>${subprice.toFixed(2)}</span></p>
                    <p className='your-order-info-taxes'>Taxes <span>${taxes}</span></p>
                </div>
                <div className='your-order-total'>
                    <p>Total <span>${totalprice}</span></p>
                </div>
                <div className='your-order-phone'>
                    <p>Leave your phone number and some one from Little Sichuan will call to confirm your order.</p>
                    <input type="text" placeholder='Phone Number ex:647-000-0000' onChange={(event) => setPhonenumber(event.target.value)} onBlur={handleBlur}/>
                    {isPhone? <p style={{color:"red"}}>*Please enter phone number</p>:null}
                </div>
                <div className='your-order-button'>
                    <button onClick={handleorder}>SUBMIT ORDER</button>
                </div>
            </div>
            }
        </div>
        </>
    )
}