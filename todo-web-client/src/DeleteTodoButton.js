import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

import { API_BASE_URL } from "./config";

export default class DeleteTodoButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.todo_id,
            isUpdating: false,
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(e) {
        console.log("delete");
        e.preventDefault();
        this.setState({
            isUpdating: true,
        });

        const response = await fetch(API_BASE_URL + "/todos/" + this.state.id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });

        await response;
        await this.setState({
            isUpdating: false,
        });
        this.props.onDelete(this.state.id);
    }

    render() {
        console.log("render button");
        return (
            <Form onSubmit={this.onSubmit}>
                <Button type="submit" loading={this.state.isUpdating}>
                    Delete Todo
                </Button>
            </Form>
        );
    }
}
