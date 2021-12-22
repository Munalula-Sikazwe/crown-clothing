import './App.css';
import HomepageComponent from "./components/pages/homepage/homepage.component";
import {Route, Switch} from "react-router-dom";
import ShopComponent from "./components/shop/shop.component";
import Header from "./components/header/header.component";


function app() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route path={"/"} component={HomepageComponent} exact/>
                <Route path={"/shop"} component={ShopComponent} exact/>
            </Switch>

        </div>
    );
}

export default app;
