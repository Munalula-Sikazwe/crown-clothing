import './App.css';
import HomepageComponent from "./pages/homepage/homepage.component";
import {Route, Switch} from "react-router-dom";
import ShopComponent from "./components/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignOutComponent from "./pages/sign-in-sign-up/sign-in-sign-out.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {Component} from "react";
import {setCurrentUser} from "./redux/user/user.actions";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selector";
import CheckoutComponent from "./pages/homepage/checkout/checkout.component";

class App extends Component {


    componentDidMount() {
        const {setCurrentUser} = this.props;
        this.unSubscribe = auth.onAuthStateChanged(async user => {
                if (user) {
                    const userRef = await createUserProfileDocument(user);
                    userRef.onSnapshot(snapShot => {
                        setCurrentUser({
                            currentUser: snapShot.id,
                            ...snapShot.data()
                        },()=>{
                            console.log(this.state);
                        });

                    });

                }

setCurrentUser( user)
            }
        );
    }

    componentWillUnmount() {
        this.unSubscribe();
    }

    render = () => {

        return <div>
            <Header />
            <Switch>
                <Route path={"/"} component={HomepageComponent} exact/>
                <Route path={"/shop"} component={ShopComponent} exact/>
                <Route path={"/signin"} render={
                    ()=>this.props.currentUser ?
                        <Redirect to={"/"}/>
                        :<SignInSignOutComponent/>
                } exact/>
                <Route path={"/checkout"} component={CheckoutComponent} exact/>
            </Switch>

        </div>
    }


}
const mapStateToProps = createStructuredSelector(
    {
  currentUser:selectCurrentUser
    }
);
const mapDispatchToProps = dispatch => (
    {
setCurrentUser:user => dispatch(setCurrentUser(user))
    }
);
export default connect(mapStateToProps,mapDispatchToProps)(App);
