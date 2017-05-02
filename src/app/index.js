import React, { Component } from 'react';
import { LeftBarComponent } from './modules/leftBar/component';
import { MapComponent }  from './modules/map/component';
import { connect } from 'react-redux';
import { getAddressList } from './modules/actions/address';

class LocationSearchComponent extends Component {
    
    constructor(props) {
        super(props);
    }

    render () {
        let dispatchAddressList = this.props.getAddressList;
        let status = this.props.fetchStatus;
        let list = this.props.addresses;

        return <div className="content">
          <LeftBarComponent getAddressList={dispatchAddressList} fetchStatus={status}/>
          <MapComponent list={list}/>
        </div>
    }
};

function mapStateToProps(state) {

    return { addresses: state.addresses.list || [], fetchStatus: state.addresses.addressListStatus };

}

export default connect(mapStateToProps, { getAddressList })(LocationSearchComponent);
