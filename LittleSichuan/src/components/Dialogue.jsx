import kungpao from '../assets/kung-pao-chicken.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import "./dialogue.css"
export default function Dialogue({isDopen, close, handleAddCart, Dnumber, setDnumber, Dprice, setDprice, name, itemprice}){
    
    function handleContainerClick(event){
        event.stopPropagation();
    }
    function handleplus(){
        setDnumber(value => value + 1);
        setDprice((currentDprice) => parseFloat(currentDprice, 2) + parseFloat(itemprice, 2));
    }
    function handleminus(){
        setDnumber(value => value - 1);
        setDprice((currentDprice) => parseFloat(currentDprice, 2) - parseFloat(itemprice, 2));
    }
    return(
        <div className='overlap' style={isDopen? {display:"flex"}:{display:"none"}} onClick={close}>
            <div className="container" onClick={handleContainerClick}>
                <div className="product-name2">
                    <h3>
                        <div className='h3-div'>
                            {name}
                            <span className="spicy-icon2">🌶️</span>
                        </div>
                        <button onClick={close}><FontAwesomeIcon icon={faTimes}/></button>
                    </h3>
                    <p>Stir-fried chicken breast with peanuts and dried chilli</p>
                </div>
                <img src={kungpao}/>
                <div className='product-operation'>
                    <button className='minus' onClick={handleminus} disabled={Dnumber === 0}><FontAwesomeIcon icon={faMinus}/></button>
                    <span className='number'>{Dnumber}</span>
                    <button className='plus' onClick={handleplus}><FontAwesomeIcon icon={faPlus}/></button>
                    <button className='add' onClick={handleAddCart}>
                        <span className='text'>ADD TO CART</span>
                        <span className='price'>${parseFloat(Dprice).toFixed(2)}</span>
                    </button>
                </div>
            </div> 
        </div>
    )


}