import React, { useState, useEffect } from 'react';
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
} from 'semantic-ui-react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import { useAuth } from '../../context/auth';

export default (props) => {
    const [loginError, setLoginError] = useState('')
    const { user, login } = useAuth();
    const { state } = useLocation();

    useEffect(() => {
        if (user.role !== 'visitor') {
            const redirectPath = state && state.from ? state.from : '/'
            props.history.push(redirectPath);
        }
    });

    const onLoginButtonClicked = async () => {
        document.location.href = "https://localhost:8000";
    }

    return (
        <Grid centered columns={2}>
            <Grid.Column>
                <Header as="h2" textAlign="center">
                    Login
                </Header>
                <Segment className="attached">
                    <Form size="large">
                        <Button color="blue" fluid size="large" onClick={onLoginButtonClicked}>
                            Login with your CAC Card
                        </Button>
                    </Form>
                </Segment>
                {loginError && (
                    <Message attached='bottom' error>
                        {loginError}
                    </Message>
                )}
            </Grid.Column>
        </Grid>
    );
}
