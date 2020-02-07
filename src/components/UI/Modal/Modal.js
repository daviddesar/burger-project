import React, { Component } from 'react'
import classes from './modal.module.css'
import Aux from '../../../hoc/AuxHoc'
import Backdrop from '../Backdrop/Backdrop'


export default class Modal extends Component {
    shouldComponentUpdate(nextprops) {
        if (nextprops.show !== this.props.show || nextprops.children !== this.props.children) {
            return true;
        }
        return false
    }
    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}
