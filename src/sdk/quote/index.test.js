import React from 'react';
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer';
import store from '../../store'

import Quote from './index';

it('renders correctly when there are no quotes', () => {
  const tree = renderer.create(
	<Provider store={store}>
        <Quote />
    </Provider>
  	).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when there quote', () => {
  const quote = {
        "ID": 1736,
        "title": "Asher Trotter",
        "content": "<p>Creating something out of thin air is easy. It&#8217;s finding the air that&#8217;s hard.</p>\n",
        "link": "https://quotesondesign.com/asher-trotter/"
  };
  const tree = renderer.create(
  	<Provider store={store}>
        <Quote data={quote} />
    </Provider>
  	).toJSON();
  expect(tree).toMatchSnapshot();
});

