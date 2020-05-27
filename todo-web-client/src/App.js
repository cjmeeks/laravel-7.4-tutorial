import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Navbar from "./NavBar";
import Home from "./Home";
import Todo from "./TodosPage";

class App extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Container text style={{ marginTop: "7em" }}>
                    <Route path="/" exact component={Home} />
                    <Route path="/todos" component={Todo} />
                </Container>
            </Router>
        );
    }
}

export default App;
