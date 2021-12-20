import './App.css';
import HomepageComponent from "./components/pages/homepage/homepage.component";
import {Route,Switch} from "react-router-dom";
import ShopComponent from "./components/pages/shop/shop.component";
const hatsPage = () => (
    <div>

        <h1>
            Hats Page
        </h1>

    </div>
)

function app() {
    return (
        <div>
        <Switch>
                    <Route path={"/"} component={HomepageComponent} exact/>
                    <Route path={"/hats"} component={hatsPage} exact/>
                <Route path={"/shop"} component={ShopComponent} exact/>
        </Switch>

        </div>
    );
}

export default app;
