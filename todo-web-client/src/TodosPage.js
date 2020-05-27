import React, { Component } from "react";
import { Header, Message, Table } from "semantic-ui-react";
import TodoForm from "./TodoForm";

import { API_BASE_URL } from "./config";

export default class TodoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: null,
            isLoading: null,
        };
        this.onAddition = this.onAddition.bind(this);
    }

    componentDidMount() {
        this.getTodos();
    }

    async getTodos() {
        if (!this.state.todos) {
            try {
                this.setState({ isLoading: true });
                const response = await fetch(API_BASE_URL + "/todos", {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                });
                const todosList = await response.json();
                this.setState({ todos: todosList.data, isLoading: false });
            } catch (err) {
                this.setState({ isLoading: false });
                console.error(err);
            }
        }
    }
    onAddition(todo) {
        console.log(this.state.todos);

        this.setState({
            todos: [...this.state.todos, todo],
        });
    }
    render() {
        return (
            <div>
                <Header as="h1">Todos</Header>
                {this.state.isLoading && (
                    <Message info header="Loading Todos..." />
                )}
                {this.state.todos && (
                    <div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.todos.map((todo) => (
                                    <tr id={todo.id} key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.name}</td>
                                        <td>Action buttons placeholder</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <TodoForm onAddition={this.onAddition} />
                    </div>
                )}
            </div>
        );
    }
}
