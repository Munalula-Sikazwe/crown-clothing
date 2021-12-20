import React from 'react';
import './homepage.styles.scss';
import DirectoryComponent from "../../directory/directory.component";


const homepageComponent = () => (
    <div className={"homepage"}>
        <DirectoryComponent/>
    </div>
)

export default homepageComponent;