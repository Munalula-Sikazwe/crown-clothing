import React from 'react';
import './homepage.styles.scss';
import MenuItemComponent from "../menu-item/menu-item.component";

const homepageComponent = () => (
    <div className={"homepage"}>
        <div className={"directory-menu"}>

            <MenuItemComponent title={"HATS"}/>
            <div className={"menu-item"}>
                <div className={"content"}>
                    <h1 className={"title"}>
                        JACKETS
                    </h1>
                    <span className={'subtitle'}>
                    SHOP NOW
                    </span>
                </div>

            </div>
            <div className={"menu-item"}>
                <div className={"content"}>
                    <h1 className={"title"}>
                        SNEAKERS
                    </h1>
                    <span className={'subtitle'}>
                    SHOP NOW
                    </span>
                </div>

            </div>
            <div className={"menu-item"}>
                <div className={"content"}>
                    <h1 className={"title"}>
                        WOMENS
                    </h1>
                    <span className={'subtitle'}>
                    SHOP NOW
                    </span>
                </div>

            </div>
            <div className={"menu-item"}>
                <div className={"content"}>
                    <h1 className={"title"}>
                        MENS
                    </h1>
                    <span className={'subtitle'}>
                    SHOP NOW
                    </span>
                </div>

            </div>
        </div>

    </div>
)

export default homepageComponent;