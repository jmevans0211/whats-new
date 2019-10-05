import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  it('should match the snapshot', () => {
    const mockfilterSearch = jest.fn()
    const wrapper = shallow(<SearchForm  search={mockfilterSearch}/>)

    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when search is being inputted', () => {
    const mockfilterSearch = jest.fn()
    const wrapper = shallow(<SearchForm  search={mockfilterSearch}/>)

    const searchEvent = {
      target: {
        value: 'the who'
      }
    }

    wrapper.instance().handleChange(searchEvent)
    expect(wrapper.state('searchField')).toEqual(searchEvent.target.value)
  });

  it('should search once button is clicked', () => {
    const mockfilterSearch = jest.fn()
    const wrapper = shallow(<SearchForm search={mockfilterSearch}/>)
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().handleSearch = jest.fn();

    wrapper.instance().forceUpdate();

    wrapper.find('button').simulate('click', mockEvent)

    expect(wrapper.instance().handleSearch).toHaveBeenCalledWith(mockEvent)

  });



}); //<<-----end of describe block


//TESTS TO HAVE

    
//onClick
  //that handle search has been called