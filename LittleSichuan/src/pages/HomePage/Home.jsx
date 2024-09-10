import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import sichuanSpicyFood from "../../assets/sichuan-spicy-food.jpg"
import kungpao from '../../assets/kung-pao-chicken.png';
import kungpao2 from "../../assets/kung-pao-chicken2.png"
import Dialogue from '../../components/dialogue';
import Cart from '../../components/Cart';
import food from "../../food.json";
import { DataContext } from '../../components/StoreProvider/Store';
import {useContext, useState } from 'react';
import "./CSS/Home.css"

export default function Home(){
    const {foodlist, setFoodlist, Hnumber, setHnumber, subprice, setSubprice, Change} = useContext(DataContext);
    const [itemname, setItemname] = useState("");
    const [itemprice, setItemprice] = useState(0);
    // handle open
    const [isDopen, setIsDopen] = useState(false);
    const [isCopen, setIsCopen] = useState(false);
    // handle dialog number
    const [Dnumber, setDnumber] = useState(0);
    // handle dialog price
    const [Dprice, setDprice] = useState(0);

    function handleopen(item){
        setIsDopen(true);
        setItemname(item.name);
        setItemprice(item.price);
        setDprice(item.price.toFixed(2));
        setDnumber(1);
    }

    function handleclose(){
        setIsDopen(false);
    }

    function handlecartclose(){
        setIsCopen(false);
    }

    function handleAddCart(){
        setHnumber(parseInt(Hnumber) + parseInt(Dnumber));
        let name = itemname;
        let localprice = itemprice;
        let food = {"quantity": Dnumber, "name": name, "price":localprice};
        let updatedlist = [...foodlist];
        let findindex = updatedlist.findIndex(value => value.name === name);
        if(findindex === -1){
            setFoodlist(prevalue => [...prevalue, food]);
        }
        else{
            updatedlist[findindex].quantity += food.quantity;
            setFoodlist(updatedlist);
        }
        setIsDopen(false);
    }

    return(
        <div className='home_container'>
            <header className="title">
                <div className="title_container">
                    Little Sichuan
                </div>
                <div className="title_right">
                    <div className="search_container">
                        <span><FontAwesomeIcon icon={faSearch}/></span>
                        <input className='search_input' type="text" placeholder="Search"/>
                    </div>
                    <div className="cart_button"><button onClick={() => setIsCopen(true)}><FontAwesomeIcon icon={faShoppingCart}/><span>Cart - {Hnumber}</span></button></div>
                </div>
            </header>
            <section className='banner'>
                <img src={sichuanSpicyFood}/>
                <div className='banner-content'>
                    <p className='big'>Authentic home style sichuanese food</p>
                    <p className='small'>open everyday from 11am to 10pm</p>
                </div>
            </section>
            <section className='best-seller'>
                <h2><span className='store-icon'></span>Best sellers <span style={{color: "#d32f2f"}}>热卖推荐</span></h2>
                <div className='product-grid'>
                    {food.bestsellers.map((item, index) => (
                    <div className='product-card' onClick={() => handleopen(item)} key={index}>
                        <div className='product-detail'>
                            <h3>{item.name}<span className="spicy-icon">🌶️</span></h3>
                            <h3><span class="price">${item.price}</span></h3>
                        </div>
                        <p style={{color:"#d32f2f"}}>{item.chinese}</p>
                        <img src={kungpao} className='product-img'/>
                    </div>))}
                </div>
            </section>
            <section className='category'>
                <h2><span className='store-icon'></span>Stir-Fry<span style={{color:"#d32f2f", marginLeft:"10px"}}>經典熱炒</span></h2>
                <div className='product-grid2'>
                    {food.stirfry.map((item, index) => (
                    <div className='product-card2' onClick={() => handleopen(item)} key={index}>
                        <img src={kungpao2}/>
                        <div className='product-detail2'>
                            <div className='product-name'>
                                <h3>{item.name}<span className="spicy-icon">🌶️</span></h3>
                                <p style={{color:"#d32f2f"}}>{item.chinese}</p>
                            </div>
                            <div className='product-price'>
                                <h3>${item.price}</h3>
                            </div>
                        </div>
                    </div>))}
                </div>
            </section>
            <section className='category'>
                <h2><span className='store-icon'></span>Cold dishes<span style={{ marginLeft:"10px"}}>冷盤</span></h2>
                <div className='product-grid2'>
                    {food.colddish.map((item, index) => (
                    <div className='product-card2' onClick={() => handleopen(item)} key={index}>
                        <img src={kungpao2}/>
                        <div className='product-detail2'>
                            <div className='product-name'>
                                <h3>{item.name}<span className="spicy-icon">🌶️</span></h3>
                                <p style={{color:"#d32f2f"}}>{item.chinese}</p>
                            </div>
                            <div className='product-price'>
                                <h3>${item.price}</h3>
                            </div>
                        </div>
                    </div>))}
                </div>
            </section>
            <section className='category'>
                <h2><span className='store-icon'></span>Rice and noodles<span style={{ marginLeft:"10px"}}>主食</span></h2>
                <div className='product-grid2'>
                    {food.noodleandrice.map((item, index) => (
                    <div className='product-card2' onClick={() => handleopen(item)} key={index}>
                        <img src={kungpao2}/>
                        <div className='product-detail2'>
                            <div className='product-name'>
                                <h3>{item.name}<span className="spicy-icon">🌶️</span></h3>
                                <p style={{color:"#d32f2f"}}>{item.chinese}</p>
                            </div>
                            <div className='product-price'>
                                <h3>${item.price}</h3>
                            </div>
                        </div>
                    </div>))}
                </div>
            </section>

            <section className='contact'>
                <div className='contact-container'>
                    <p className='name'><span></span>Little Shichuan</p>
                    <p className='street'>100 Street name, Toronto</p>
                    <p className='phone-number'>Phone number: 647-000-0000</p>
                    <p className='email'>Email: contact@littlesichuan.com</p>
                </div>
            </section>
            <Dialogue isDopen={isDopen} close={handleclose} handleAddCart={handleAddCart} setDnumber={setDnumber} 
            Dnumber={Dnumber} Dprice={Dprice} setDprice={setDprice} name={itemname} itemprice={itemprice}/>

            <Cart isCopen={isCopen} close={handlecartclose} foodlist={foodlist} setFoodlist={setFoodlist} setHnumber={setHnumber} subprice={subprice} setSubprice={setSubprice}
            change={Change}/>
        </div>
    )

}