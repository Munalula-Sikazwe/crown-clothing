import './App.css';
import HomepageComponent from "./components/pages/homepage/homepage.component";
import {Route, Switch} from "react-router-dom";
import ShopComponent from "./components/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignOutComponent from "./components/pages/sign-in-sign-up/sign-in-sign-out.component";
import {auth, createUserProfileDocument} from "./components/firebase/firebase.utils";
import {Component} from "react";

class App extends Component {
    state = {
        currentUser: null
    }

    componentDidMount() {
        this.unSubscribe = auth.onAuthStateChanged(async user => {
                if (user) {
                    const userRef = await createUserProfileDocument(user);
                    userRef.onSnapshot(snapShot => {
                        this.setState({
                            currentUser: snapShot.id,
                            ...snapShot.data()
                        });
                        console.log(this.state)
                    });

                }

this.setState({currentUser: user})
            }
        );
    }

    componentWillUnmount() {
        this.unSubscribe();
    }

    render = () => {
        const {currentUser} = this.state;
        return <div>
            <Header currentUser={currentUser}/>
            <Switch>
                <Route path={"/"} component={HomepageComponent} exact/>
                <Route path={"/shop"} component={ShopComponent} exact/>
                <Route path={"/signin"} component={SignInSignOutComponent} exact/>
            </Switch>

        </div>
    }


}

export default App;
