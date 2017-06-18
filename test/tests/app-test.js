import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

// THE COMPONENT TO BE TESTED
import {App} from '../../src/components/App';

const testProps = {
    loadStore: sinon.spy()
};

describe('APP : ', function (){
    let wrapper;

    before(function () {
        wrapper = shallow(<App {...testProps}/>);
    });

    after(function () {
        wrapper = null;
    });

    it('Should render SearchBar', () =>{
        expect( wrapper.find('SearchBar').length).to.equal(1);
    });

    it('Should render CharacterListView Container', () =>{
        expect( wrapper.find('ul').length).to.equal(1);
    });

    it('Should render CharacterDetailsView Container', () =>{
        expect( wrapper.find('CharacterDetailsView').length).to.equal(1);
    });

});
