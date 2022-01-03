import React from 'react';
import './homepage.styles.scss';
import DirectoryComponent from "../../components/directory/directory.component";
import {HomePageContainer} from "./homepage.styles";

const homepageComponent = () => (
    <HomePageContainer>
        <DirectoryComponent/>
    </HomePageContainer>
)

export default homepageComponent;