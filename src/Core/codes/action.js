import { Route } from "react-router-dom"
import React from 'react';
export class MakebodyWithRoutes extends React.Component {
    constructor(props) {
        super(props);
        this.route = this.props.route;
    }
    render() {
        return (
            this.route.map((index, key) => {
                return (
                    <Route exact key={key} path={index.path} render={() => index.render} />
                )
            }
            )
        )
    }
}
export function reactRouteLink(history, route) {
    history.push(route);
    document.title = "cashFILE - " + route

}
