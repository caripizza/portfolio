import React from 'react';
import renderer from 'react-test-renderer';
import Homebrewdog from './Homebrewdog';

describe('Homebrewdog', () => {
  it('matches a snapshot', () => {
    const component = renderer.create(
      <Homebrewdog />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
