import './App.css';
import HomepageComponent from "./components/pages/homepage/homepage.component";
import {Route,Switch} from "react-router-dom";
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
        </Switch>

        </div>
    );
}

export default app;
