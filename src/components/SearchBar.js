import React,{PropTypes} from 'react';
import {Row,Col} from 'react-flexbox-grid';
import _ from 'lodash';

const SearchBar = (props) => {
    return (
        <Row className='searchBoxStyle' center='xs'>
            <Col md={12} xs={12}>
                <input type='text'
                    name='charSearchName'
                    placeholder='Enter Character Name Here...'
                    onChange={(event) => _.debounce(props.loadStore(event.target.value), 100,{'maxWait': 500})}/>
            </Col>
        </Row>
    );
};

SearchBar.propTypes = {
    loadStore: PropTypes.func
};

export default SearchBar;
