import React from 'react';
import { connect } from 'react-redux';
import './AppLayout.scss';
import HeaderNav from '../HeaderNav/HeaderNav';
import { SideBar } from '../SideBar/SideBar';
import { SemanticToastContainer, toast } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';
import { actions as common } from '../../state';

class AppLayout extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.message && this.props.message) {
            toast({
                icon: this.props.icon,
                type: this.props.message.type,
                title: this.props.message.title || '',
                description: this.props.message.description || '',
                size: 'small',
                time: 5000
            })
            this.props.clearMessage();
        }
    }

    render() {
        return (
            <div className='app-layout'>
                <HeaderNav />
                <SideBar />
                <div className='main'>
                    {this.props.children}
                    <SemanticToastContainer className="container" position="top-right"/>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        message: state.common.message,
        directorates: state
    };
};

export default connect(
    mapStateToProps,
    { clearMessage: common.clearMessage }
)(AppLayout);