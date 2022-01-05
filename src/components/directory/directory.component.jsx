import React from 'react';
import './directory.styles.css';
import MenuItemComponent from "../menu-item/menu-item.component";
import {createStructuredSelector} from "reselect";
import selectSections from "../../redux/directory/directory.selectors";
import {connect} from "react-redux";


const directoryComponent = ({sections}) => (
    <div className={"directory-menu"}>
        {sections.map(({id, ...sectionProps}) => {
            return <MenuItemComponent key={id} {...sectionProps}/>
        })}
    </div>
);


const mapStateToProps = createStructuredSelector({
        sections: selectSections,
    }
);
export default connect(mapStateToProps)(directoryComponent);

