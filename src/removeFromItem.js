
const removeFromItem = (item, id) => {

    return item.filter(ele => ele.id != id);
};

export default removeFromItem;
