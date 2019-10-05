import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<Menu selectTopic='local'/>);

    expect(wrapper).toMatchSnapshot();
  });

  // it('should call handleClick when clicked', () => {
  //   const wrapper = shallow(<Menu selectTopic='entertainment'/>);
  //   const handleClickMock = jest.fn()
  //   const mockEvent = {
  //     target: {
  //       className: 'entertainment'
  //     }
  //   }

  //   wrapper.find('.entertainment').simulate('click')

  //   expect(handleClickMock).toHaveBeenCalledWith(mockEvent)  
  // });

}); //<<------ end of describe block