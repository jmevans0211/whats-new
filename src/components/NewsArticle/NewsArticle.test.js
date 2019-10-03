
import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('NewsArticle', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<NewsArticle
      headline={}
      img={}
      description={}
      url={}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});