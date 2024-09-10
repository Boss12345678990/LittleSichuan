import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
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
                            <div className='delete-button'>
                                <button onClick={() => handlecartdelete(index)}><FontAwesomeIcon icon={faTrash}/></button>
                            </div>
                        </li>    
                    ))}
                        
                </div>
                <div className='checkout'>
                    {foodlist.length === 0? null : <Link to="/checkout" style={{textDecoration:"none"}}><button className='checkout-button'><span className='ckeckout-text'>GO TO CHECKOUT</span><span className='ckeckout-price'>{subprice.toFixed(2)}</span></button></Link>}
                </div>
            </div>
        </div>
    )
}