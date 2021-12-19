import React,{Component} from 'react';
import sections from "./data";
import './directory.styles.css';
import MenuItemComponent from "../menu-item/menu-item.component";
class DirectoryComponent extends Component{
    state = {
        sections
    }
    render = () =>(
        <div className={"directory-menu"}>
            { this.state.sections.map(({id,title,imageUrl}) =>{
                return <MenuItemComponent key={id} title={title} imageUrl={imageUrl}/>
            })}
        </div>
    )
}
export default DirectoryComponent;

