import React from "react";
import CollectionsOverviewComponent from "../collections-overview/collections-overview.component";
import {Route} from "react-router-dom";
import CollectionComponent from "../collection/collection.component";

const shopComponent = ({match}) =>
    (<div className={"shop-page"}>
        <Route path={match.path} component={CollectionsOverviewComponent} exact/>
        <Route path={`${match.path}/:categoryId`} component={CollectionComponent} exact/>
    </div>);
export default shopComponent;