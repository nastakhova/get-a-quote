import React from 'react';
import renderer from 'react-test-renderer';

import Button from './index';

it('renders correctly when there are no props', () => {
  const tree = renderer.create(
    <Button />
  	).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when have no text', () => {
  const tree = renderer.create(
  	<Button type="edit" />
  	).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when have no type', () => {
  const tree = renderer.create(
    <Button text="edit" />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when have type and text', () => {
  const tree = renderer.create(
    <Button text="Edit Trattat" type="edit" />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});

