import React from "react";
import CollectionsOverviewComponent from "../collections-overview/collections-overview.component";

const shopComponent = ({collections}) =>
    (<div className={"shop-page"}>
        <CollectionsOverviewComponent/>
    </div>);


export default shopComponent;