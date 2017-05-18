import React from 'react';
import renderer from 'react-test-renderer';
import { LeftBarComponent } from './component';

describe('<LeftBarComponent />', () => {

    it('It should render LeftBar', () => {

        const fetchStatus = {
            error: false,
            message: ''
        }
        const tree = shallow(
            <LeftBarComponent fetchStatus={fetchStatus}/>
        );

        expect(tree).toMatchSnapshot();

    });

});