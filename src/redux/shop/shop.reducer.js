import SHOP_DATA from "../../components/shop/data";
const INITIAL_STATE = {
    SHOP_DATA
}

const shopReducer = (state=INITIAL_STATE)=>(
    {
...state
    }
);

export default  shopReducer;