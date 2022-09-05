import React, { useEffect, useState } from 'react'
import "./items.css"
const Items = ({ item }) => {

    const [noOfItems, setNoOfItems] = useState(1);
    const [price, setPrice] = useState(+item.price);

    const add = () => {
        setNoOfItems(prev => +prev + 1);
    }

    const remove = () => {
        setNoOfItems(prev => +prev - 1);
    }

    const noOfItemChange = (e) => {
        setNoOfItems(prev => +e.target.value);
    }

    useEffect(() => {
        if (noOfItems > 1) {
            setPrice(prev => +noOfItems * item.price);
        }
    }, [noOfItems])
    return (
        <>
            <div id='selected-item'>
                <div className="selectd-item-img" data-testid="selectd-item-img">
                    <img src={`${item.src}`} alt={`image of ${item.name}`} />
                </div>
                <div className="selected-item-info" data-testid="selected-item-name">
                    <p>{item.name}</p>
                </div>
                <div className="selected-item-price" data-testid="selected-item-price">
                    {price}
                </div>
            </div>
            <div id="upadate-no-of-item">
                <div className="add" onClick={add}>
                    <button type="button">+</button>
                </div>

                <input type="text"
                    name="no-of-item"
                    id="no-of-item"
                    value={noOfItems}
                    onChange={noOfItemChange}
                />

                <div className="remove" onClick={remove} >
                    <button type="button">-</button>
                </div>
            </div>
        </>
    )
}

export default Items