import React from 'react';
import { render, getByText } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../index';
import { exportAllDeclaration } from '@babel/types';

describe('<Header />', () => {

  const routes = [{link: '/another', label: 'Another'}]

  let wrapper;
  beforeEach(() => {

    const { container } = render(
      <BrowserRouter>
        <Header routes={routes} />
      </BrowserRouter>
    );

    wrapper = container;
     
  })

  it('should have 2 anchors when supplied with 1 extra route', () => {

    const anchors = wrapper.querySelectorAll('a');
    expect(anchors).toHaveLength(2);
    
  })
   
  it('should render text', () => {

    //home anchor
    const homeAnchor = getByText(wrapper, 'Home');
    expect(homeAnchor).toBeDefined();

    //route anchor
    const anotherAnchor = getByText(wrapper, routes[0].label);
    expect(anotherAnchor).toBeDefined();

  })

  it('should have the correct href', () => {

    const anotherAnchor = getByText(wrapper, routes[0].label);
    expect(anotherAnchor.getAttribute('href')).toEqual(routes[0].link);

  })
})