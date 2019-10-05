import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  it('should match the snapshot', () => {
    const mockfilterSearch = jest.fn()
    const wrapper = shallow(<SearchForm  search={mockfilterSearch}/>)

    expect(wrapper).toMatchSnapshot();
  });



  // it('should match the snapshot', () => {
  //   const wrapper = shallow(<Form addIdea={mockAddIdea} />)
  //   expect(wrapper).toMatchSnapshot();
  // });

}); //<<-----end of describe block


//TESTS TO HAVE
// state
  //empty search field

//handle change
  //test that the state has indeed changed when there is an input
    //mimic input
      //set state
    
//onClick
  //that handle search has been called