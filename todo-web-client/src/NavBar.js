import React, { Component } from "react";
import { Container, Menu } from "semantic-ui-react";

export default class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {}

    async componentDidUpdate() {}

    render() {
        return (
            <div>
                <Menu fixed="top" inverted>
                    <Container>
                        <Menu.Item as="a" header href="/">
                            Home
                        </Menu.Item>
                        {
                            <Menu.Item id="todo-button" as="a" href="/todos">
                                Todos game
                            </Menu.Item>
                        }
                    </Container>
                </Menu>
            </div>
        );
    }
}
