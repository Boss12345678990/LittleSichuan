import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import "./dialogue.css";

export default function Dialogue({close, handleAddCart, dialogData, setDialogData}){
    
    function handleContainerClick(event){
        event.stopPropagation();
    }
    function handleplus(){
        setDialogData((prevData) => ({
            ...prevData,
            quantity: prevData.quantity + 1,
            displayPrice: (parseFloat(prevData.displayPrice) + parseFloat(prevData.price)).toFixed(2)
        }))
        // setDnumber(value => value + 1);
        // setDprice((currentDprice) => parseFloat(currentDprice, 2) + parseFloat(itemprice, 2));
    }
    function handleminus(){
        setDialogData((prevData) => ({
            ...prevData,
            quantity: prevData.quantity - 1,
            displayPrice: (parseFloat(prevData.displayPrice) - parseFloat(prevData.price)).toFixed(2)
        }))
        // setDnumber(value => value - 1);
        // setDprice((currentDprice) => parseFloat(currentDprice, 2) - parseFloat(itemprice, 2));
    }
    return(
        <div className='overlap' style={dialogData.isOpen? {display:"flex"}:{display:"none"}} onClick={close}>
            <div className="container" onClick={handleContainerClick}>
                <div className="product-name2">
                    <h3>
                        <div className='h3-div'>
                            {dialogData.name}
                        </div>
                        <button onClick={close}><FontAwesomeIcon icon={faTimes}/></button>
                    </h3>
                    {dialogData.description === "" ? <p>----</p>:<p>{dialogData.description}</p>}
                </div>
                <img src={`./src/assets/${dialogData.photo}.jpeg`}/>
                <div className='product-operation'>
                    <button className='minus' onClick={handleminus} disabled={dialogData.quantity === 0}><FontAwesomeIcon icon={faMinus}/></button>
                    <span className='number'>{dialogData.quantity}</span>
                    <button className='plus' onClick={handleplus}><FontAwesomeIcon icon={faPlus}/></button>
                    <button className='add' onClick={handleAddCart}>
                        <span className='text'>ADD TO CART</span>
                        <span className='price'>${parseFloat(dialogData.displayPrice).toFixed(2)}</span>
                    </button>
                </div>
            </div> 
        </div>
    )


}
