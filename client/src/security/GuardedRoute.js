import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Can from './Can';
import { useStore } from '../context';

export const GuardedRoute = ({ component: Component, roles, ...rest }) => {
    const { perform } = rest;
    const { auth: { user } } = useStore();

    const authCheckFailed = () => {
        if (user.role === 'visitor') {
            return <Redirect to="/login" />
        } else {
            return <Redirect to="/403" />;
        }
    }

    return (
        <Route {...rest} render={props => {
            return <Can
                role={user.role}
                perform={perform}
                yes={() => {
                    // render component to user
                    return <Component {...props} />;
                }}
                no={authCheckFailed}
            />
        }} />
    );
}
