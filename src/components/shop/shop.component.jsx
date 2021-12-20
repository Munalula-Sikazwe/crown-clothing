import React,{Component} from "react";
import SHOP_DATA from "./data";
import PreviewCollectionComponent from "../preview-collection/preview-collection.component";
class ShopComponent extends Component {

state = {
    collections: SHOP_DATA
}
render = ()=>{
    const {collections} = this.state;
    return (<div className={"shop-page"}>
        {collections.map(({id,...otherCollectionProps}) =>(

               <PreviewCollectionComponent key={id} {...otherCollectionProps}/>

        ))}
    </div>)
}


}
export default ShopComponent;