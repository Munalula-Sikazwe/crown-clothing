import React,{Component} from "react";
import SHOP_DATA from "./data";
class ShopComponent extends Component {

state = {
    collections: SHOP_DATA
}
render = ()=>(
    <div>
        SHOP PAGE
    </div>
)
}
export default ShopComponent;