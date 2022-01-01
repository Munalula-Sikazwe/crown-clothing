import React from "react";
import CollectionsOverviewComponent from "../collections-overview/collections-overview.component";
import {Route} from "react-router-dom";
const shopComponent = ({match}) =>
    (<div className={"shop-page"}>
        <CollectionsOverviewComponent/>
    </div>);


export default shopComponent;