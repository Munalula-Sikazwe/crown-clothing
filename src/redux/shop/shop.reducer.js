import SHOP_DATA from "../../components/shop/data";
const INITIAL_STATE = {
    collections : SHOP_DATA
}

const shopReducer = (state=INITIAL_STATE)=>(
    {
...state
    }
);

export default  shopReducer;