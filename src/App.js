import './App.css';
import HomepageComponent from "./pages/homepage/homepage.component";
import {Redirect, Route, Switch} from "react-router-dom";
import ShopComponent from "./components/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignOutComponent from "./pages/sign-in-sign-up/sign-in-sign-out.component";
import {auth, createUserProfileDocument,addCollectionsAndDocuments} from "./firebase/firebase.utils";
import React, {Component} from "react";
import {setCurrentUser} from "./redux/user/user.actions";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser,} from "./redux/user/user.selector";
import CheckoutComponent from "./pages/checkout/checkout.component";
import CollectionComponent from "./components/collection/collection.component";
import {selectCollectionsForPreview} from "./redux/shop/shop.selectors";
class App extends Component {
    unSubscribe = null;

    componentDidMount() {
        const {setCurrentUser,collectionsArray} = this.props;
        this.unSubscribe = auth.onAuthStateChanged(async user => {
                if (user) {
                    const userRef = await createUserProfileDocument(user);
                    userRef.onSnapshot(snapShot => {
                        setCurrentUser({
                            currentUser: snapShot.id,
                            ...snapShot.data()
                        }, () => {
                            console.log(this.state);
                        });

                    });

                }

                setCurrentUser(user);
                addCollectionsAndDocuments('collections', collectionsArray.map(({title,items})=>({title,items})))
            }
        );
    }

    componentWillUnmount() {
        this.unSubscribe();
    }

    render = () => {

        return <div>
            <Header/>
            <Switch>
                <Route path={"/"} component={HomepageComponent} exact/>
                <Route path={"/shop"} component={ShopComponent} exact/>
                <Route path={"/signin"} render={
                    () => this.props.currentUser ?
                        <Redirect to={"/"}/>
                        : <SignInSignOutComponent/>
                } exact/>
                <Route path={`/shop/:collectionId`} component={CollectionComponent} exact/>
                <Route path={"/checkout"} component={CheckoutComponent} exact/>
            </Switch>

        </div>
    }


}

const mapStateToProps = createStructuredSelector(
    {
        currentUser: selectCurrentUser,
        collectionsArray:selectCollectionsForPreview
    }
);
const mapDispatchToProps = dispatch => (
    {
        setCurrentUser: user => dispatch(setCurrentUser(user))
    }
);
export default connect(mapStateToProps, mapDispatchToProps)(App);
