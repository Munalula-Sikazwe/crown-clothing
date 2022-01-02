import React from 'react';
import './collection.styles.scss';
import {selectCollection} from "../../redux/shop/shop.selectors";
import {connect} from "react-redux";
const collectionComponent = ({collection}) => (

    <div className="category">
        <h2>
            {console.log(collection)}
            CATEGORY PAGE
        </h2>
    </div>
);
const mapStateToProps = (state,ownProps)=>(
    {
        collection:selectCollection(ownProps.match.params.collectionId)(state)
    }
);
export default connect(mapStateToProps)(collectionComponent);

