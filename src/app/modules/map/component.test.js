import React from 'react';
import renderer from 'react-test-renderer';
import { MapComponent } from './component';

describe('<MapComponent />', () => {

    it('It should render MapComponent with nothing', () => {

        const list = null;
        const tree = shallow(
            <MapComponent list={list}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();

    });

    it('It should render MapComponent with single item', () => {

        const list = [{
            accountId:"354a0000-6fdf-4057-b6a7-4cab9e2f06ef",
            address1:"300 S HARBOR BLVD., SUITE 300",
            city:"ANAHEIM",
            distance:0.0773955190800392,
            lat:33.83157,
            lng:-117.91798,
            locationId:"f5264af0-0afd-4733-8066-83c47d8522e6",
            name:"AT&T CORP - CA3044",
            state:"CA"
        }];

        const tree = shallow(
            <MapComponent list={list}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();

    });

});