import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Homebrewdog from './Homebrewdog';

describe('Homebrewdog', () => {
  it('matches a snapshot', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Homebrewdog />
      </MemoryRouter>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
