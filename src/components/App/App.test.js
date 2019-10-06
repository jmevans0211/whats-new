import React from 'react';
import { shallow } from 'enzyme';
import entertainment from '../../data/entertainment';
import App from './App';

describe('App', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when a new topic is selected', () => {
    const wrapper = shallow(<App />);
    const mockNews = {
      entertainment: entertainment
    };
    const expected = mockNews.entertainment;

    wrapper.instance().selectTopic('entertainment')

    expect(wrapper.state('currentTopic')).toEqual(expected);
  });

  it('should update state when something is searched', () => {
    const wrapper = shallow(<App />);
    const currentState = {
      currentTopic: entertainment
    };
    const expected = [
      {
        id: 4,
        headline: 'Metallica Cancel Tour as James Hetfield Returns to Rehab',
        img: 'https://www.rollingstone.com/wp-content/uploads/2019/09/10331207d.jpg?resize=900,600&w=1200',
        description: 'Metallica have postponed their upcoming tour of Australia and New Zealand so James Hetfield could return to rehab, the heavy metal legends announced Friday.',
        url: 'https://www.rollingstone.com/music/music-news/metallica-cancel-tour-james-hetfield-rehab-892158/'
      }
    ]

    wrapper.setState(currentState)

    wrapper.instance().filterSearch('Metallica');

    expect(wrapper.state('currentTopic')).toEqual(expected)
  });
}); //<<<-----end of App



