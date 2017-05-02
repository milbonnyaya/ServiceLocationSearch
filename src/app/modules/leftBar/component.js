import React, { Component } from 'react';

export class LeftBarComponent extends React.Component {
    
    constructor(props) {
        super(props);

        // set default state
        this.state = {
            address: '222 S Harbor Blvd #500, Anaheim, CA 92805',
            apiKey: '3ff49cd1-8340-4b2d-889b-6d9bcd6a5a9c',
            limit: 100,
            radius: 10,
            showGroup: 'show',
            width: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.showLeftNav = this.showLeftNav.bind(this);
    }

    showLeftNav () {
        this.setState({ showGroup: (this.state.showGroup === 'show' ? "hide" : "show") });
    }

    handleInputChange (event) {
        let name = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    handleClick () {
        let { getAddressList } = this.props;
        getAddressList({
            address: this.state.address,
            apiKey: this.state.apiKey,
            radius: this.state.radius,
            limit: this.state.limit
        });

        if (this.state.width <= 599) {
            this.setState({ showGroup: 'hide' });
        }
    }

    handleOnResize () {
        let w = window,
            d = document,
            documentElement = d.documentElement,
            body = d.getElementsByTagName('body')[0],
            width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
        
        if (width <= 599) {
            this.setState({ showGroup: 'hide', width: width });
        } else {
            this.setState({ showGroup: 'show', width: width });
        }
    }

    componentWillMount () {
        this.handleOnResize();
    }

    componentDidMount () {
        window.addEventListener("resize", this.handleOnResize.bind(this));
    }

    componentWillUnmount () {
        window.removeEventListener("resize", this.handleOnResize.bind(this));
    }

    render () {
        let { fetchStatus } = this.props;
        return (
            <div className="leftBarMain">
                <div className="bars">
                    <button onClick={this.showLeftNav}>
                        <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
                    </button>
                </div>
                <div className={"groupMain " + this.state.showGroup}>
                    <div className="group">
                        <input type="textbox" name="address" placeholder="Address" defaultValue={this.state.address} onChange={this.handleInputChange} />
                    </div>
                    <div className="group">
                        <input type="textbox" name="apiKey" placeholder="API Key" defaultValue={this.state.apiKey} onChange={this.handleInputChange} />
                    </div>
                    <div className="group">
                        <input type="tel" name="radius" placeholder="Radius" defaultValue={this.state.radius} onChange={this.handleInputChange} />
                    </div>
                    <div className="group">
                        <input type="tel" name="limit" placeholder="Limit" defaultValue={this.state.limit} onChange={this.handleInputChange} />
                    </div>
                    <div className={"group " + ((fetchStatus.error) ? "show" : "hide")}>
                        <p className="error">{fetchStatus.message}</p>
                    </div>
                    <div className="group">
                        <button onClick={this.handleClick}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
};
