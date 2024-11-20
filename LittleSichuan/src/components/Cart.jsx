import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "./Cart.css"
import { useEffect} from 'react';
import _default from '@mui/material/styles/identifier';

export default function Cart({isCopen, close, foodlist, setFoodlist, setHnumber, subprice, setSubprice, change}){


    function handleChangeQuantity(data, index, event){
        change(data, index, event);
    }
    function handlecartdelete(index){
        setFoodlist(foodlist.filter((_, i) => i !== index));
        let quantity = foodlist[index].quantity;
        setHnumber(value => value - quantity);
    }
    useEffect(()=>{
        let sum = 0
        let total = foodlist.reduce((acc, cur) => acc + (cur.quantity * cur.price), sum);
        setSubprice(total);
    })

    return(
        <div className='toggle-overlap'style={isCopen? {display:"flex"} : {display:"none"}} onClick={close}>
            <div className='toggle-menu' onClick={(event) => event.stopPropagation()}>
                <div className='cart-title'>
                    <p>Cart</p><span onClick={close}><FontAwesomeIcon icon={faTimes}/></span>
                </div>
                <div className='cart-list'>
                    {foodlist.map((data, index) => (
                        <li key={index} className='cart-item'> 
                            <div>
                                <label htmlFor="quantity">
                                    <select value={data.quantity} name="quantity" id="quantity" onChange={(event) => handleChangeQuantity(data, index, event)}>
                                    {[...Array(11).keys()].map((num) => (
                                        <option key={num} value={num}>
                                        {num}
                                        </option>
                                    ))}
                                        <FontAwesomeIcon icon={faAngleDown}/>
                                    </select>
                                </label>
                            </div>
                            <div className='item-name-and-item-price'>
                                <p>{data.name}</p>
                                <span>${data.price - 0.01}</span>
                            </div>
                            <div className='delete-button'>
                                <button onClick={() => handlecartdelete(index)}><FontAwesomeIcon icon={faTrash}/></button>
                            </div>
                        </li>    
                    ))}
                </div>
                <div className='checkout'>
                {foodlist.length === 0? 
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center", paddingTop:"50px"}}>
                    <FontAwesomeIcon icon={faCartShopping} style={{fontSize:"30px", marginBottom:"20px"}}/>
                    <p>Please Select Items</p>
                </div> : 
                <Link to="/checkout" style={{textDecoration:"none"}}>
                    <button className='checkout-button'>
                        <span className='ckeckout-text'>
                            GO TO CHECKOUT
                        </span>
                        <span className='ckeckout-price'>
                            {subprice.toFixed(2)}
                        </span>
                    </button>
                </Link>}
                </div>
            </div>
        </div>
    )
}