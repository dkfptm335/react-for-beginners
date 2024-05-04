import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact></Route>
                <Route path="/movie/:id" component={Detail} exact></Route>
            </Switch>
        </Router>
    );
}

export default App;