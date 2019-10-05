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



}); //<<-----end of describe block


//TESTS TO HAVE

//handle change
  //test that the state has indeed changed when there is an input
    //mimic input
      //set state
    
//onClick
  //that handle search has been called