import React from 'react';
import { createContext} from 'react';
import { useState } from 'react';

const DataContext = createContext();

const StoreProvider = ({children}) => {
  const [Hnumber, setHnumber] = useState(0);
  const [foodlist, setFoodlist] = useState([]);
  const [subprice, setSubprice] = useState(0);
  
  function Change(data, index, event){
    const value = parseInt(event.target.value);
    const oldQuantity = data.quantity;
    const quantityChange = value - oldQuantity;
    
    setHnumber(prevNumber => prevNumber + quantityChange);
    if (value === 0) {
        setFoodlist(prevList => prevList.filter((_, i) => i !== index));
    } else {
        setFoodlist(prevList => {
            let newList = [...prevList];
            newList[index].quantity = value;
            return newList;
        });
    }
  }
  return (
    <DataContext.Provider value={{Hnumber, setHnumber,foodlist, setFoodlist, subprice, setSubprice, Change}}>
            {children}
    </DataContext.Provider>
  )
}

export {StoreProvider, DataContext}
