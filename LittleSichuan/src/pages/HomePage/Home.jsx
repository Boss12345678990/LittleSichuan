import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import sichuanSpicyFood from "../../assets/sichuan-spicy-food.jpg"
import Dialogue from '../../components/Dialogue';
import Cart from '../../components/Cart';
import getFood from '../../utils/getFood';
import Category from '../../components/Category';
import { DataContext } from '../../components/StoreProvider/Store';
import { useContext, useEffect, useState} from 'react';
import "./CSS/Home.css";

const categories = [
        { title: "Best Sellers", chineseTitle: "热卖推荐", type: "Main" },
        { title: "Stir-Fry", chineseTitle: "經典熱炒", type: "Stir Fired" },
        { title: "Cold Dishes", chineseTitle: "冷盤", type: "Cold Dishes" },
        { title: "Dumplings", chineseTitle: "餃子", type: "Dumplings" },
        { title: "House Special Stuffed Bun", chineseTitle: "包子", type: "House Special Stuffed Bun" },
        { title: "Vegetarian", chineseTitle: "素食類", type: "Vegetarian" },
        { title: "Soups", chineseTitle: "湯類", type: "Soup" },
        { title: "Feast Zone", chineseTitle: "盛宴區", type: "Feast Zone" },
        { title: "Snacks", chineseTitle: "甜品", type: "Snacks" },
        { title: "Special Desserts", chineseTitle: "限定甜品", type: "Special Dessert" },
];

export default function Home(){
    const {foodlist, setFoodlist, Hnumber, setHnumber, subprice, setSubprice, Change} = useContext(DataContext);

    const [dialogData, setDialogData] = useState({
        isOpen: false,
        name: "",
        price: 0,
        description: "",
        photo: "",
        displayPrice: "0.00",
        quantity: 1,
        productId: null
    })
    const [food, setFood] = useState([]);
    const [query, setQuery] = useState("");
    const [filterFood, setFilterFood] = useState([]);
    const [isCopen, setIsCopen] = useState(false);

    function handleopen(item){
        setDialogData({
            isOpen: true,
            name: item.name,
            price: item.price,
            description: item.description,
            photo: item.photo,
            displayPrice: parseFloat(item.price).toFixed(2),
            quantity: 1,
            productId: item.id
        })
    }

    function handleclose(){
        setDialogData((value) => ({
            ...value,
            isOpen: false,
        }));
    }

    function handlecartclose(){
        setIsCopen(false);
    }

    function handleAddCart(){
        setHnumber(parseInt(Hnumber) + parseInt(dialogData.quantity));
        const {productId, name, price, quantity} = dialogData;
        let food = {"productId": productId, "quantity": quantity, "name": name, "price": price};
        let updatedlist = [...foodlist];
        let findindex = updatedlist.findIndex(value => value.name === name);
        if(findindex === -1){
            setFoodlist(prevalue => [...prevalue, food]);
        }
        else{
            updatedlist[findindex].quantity += food.quantity;
            setFoodlist(updatedlist);
        }
        setDialogData((value) => ({
            ...value,
            isOpen: false,
        }));
    }
    useEffect(() =>{
        const fetchData = async () => {
            const data = await getFood();
            setFood(data);
        }
        fetchData();
    }, []);

    useEffect(() => {
        if(query){
            const searchFood = food.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));
            setFilterFood(searchFood);
        }
        else{
            setFilterFood(food);
        }
    }, [query]);

    return(
        <div className='home_container'>
            <header className="title">
                <div className="title_container">
                    Little Sichuan
                </div>
                <div className="title_right">
                    <div className="search_container">
                        <span><FontAwesomeIcon icon={faSearch}/></span>
                        <input className='search_input' type="text" placeholder="Search" onChange={(e) => setQuery(e.target.value)}/>
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
            {query?
            <section className='category'>
                <h2><span className='store-icon'></span>Search For Products with "{query}"</h2>
                <div className='product-grid2'>
                    {filterFood.map((item, index) => (
                    <div className='product-card2' onClick={() => handleopen(item)} key={index}>
                        <img src={`./src/assets/${item.photo}.jpeg`}/>
                        <div className='product-detail2'>
                            <div className='product-name'>
                                <h3>{item.name}</h3>
                                <p style={{color:"#d32f2f"}}>{item.chinese}</p>
                            </div>
                            <div className='product-price'>
                                <h3>${parseFloat(item.price).toFixed(2)}</h3>
                            </div>
                        </div>
                    </div>))}
                </div>
            </section>
: <>
            <div className='navigation-button'>
                {categories.map((name) => 
                    <button onClick={() => {
                        const targetId = name.type ? name.type.replace("-", " ").toLowerCase() : "";
                        const targetElement = document.getElementById(targetId);
                        if (targetElement) {
                            targetElement.scrollIntoView({ behavior: 'smooth' });
                        } else {
                            console.error("Element not found:", targetId);
                        }
                    }}>
                        {name.title.replace("-", " ")}
                    </button>)}
            </div>
            {categories.map((category, index) => (
                <Category
                    key={index}
                    title={category.title}
                    chineseTitle={category.chineseTitle}
                    type={category.type}
                    food={food}
                    handleopen={handleopen}
                />
            ))}
            </>
            }
            <section className='contact'>
                <div className='contact-container'>
                    <p className='name'><span></span>Little Shichuan</p>
                    <p className='street'>100 Street name, Toronto</p>
                    <p className='phone-number'>Phone number: 647-000-0000</p>
                    <p className='email'>Email: contact@littlesichuan.com</p>
                </div>
            </section>
            <Dialogue close={handleclose} handleAddCart={handleAddCart} dialogData={dialogData} setDialogData={setDialogData}/>

            <Cart isCopen={isCopen} close={handlecartclose} foodlist={foodlist} setFoodlist={setFoodlist} setHnumber={setHnumber} subprice={subprice} setSubprice={setSubprice}
            change={Change}/>
        </div>
    )

}