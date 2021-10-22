import React from 'react';
import {HashRouter, Switch, Route} from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Presentation from "./Pages/Presentation/Presentation";
import Header from "./Components/Header/Header";
import Work from "./Pages/Work/Work";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <ScrollToTop/>
                <Header/>
                <Switch>
                    <Route path="/" exact component={Presentation}/>
                    <Route path="/work" exact component={Work}/>
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;
