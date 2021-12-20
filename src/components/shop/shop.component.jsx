import React,{Component} from "react";
import SHOP_DATA from "./data";
import PreviewCollectionComponent from "../preview-collection/preview-collection.component";
class ShopComponent extends Component {

state = {
    collections: SHOP_DATA
}
render = ()=>{
    const {collections} = this.state;
    return (<div>
        {collections.map((id,...otherCollectionProps) =>(
            <div key={id}>
               <PreviewCollectionComponent {...otherCollectionProps}/>
            </div>
        ))}
    </div>)
}


}
export default ShopComponent;