import React from 'react'

const Items = ({ item }) => {
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
                    {item.price}
                </div>
            </div>
            <div id="upadate-no-of-item">
                <div className="add">+</div>
                <input type="text" name="no-of-item" id="no-of-item" />
                <div className="remove">-</div>
            </div>
        </>
    )
}

export default Items