import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';
import { create } from 'react-test-renderer';
const footer = mount(<Footer />);

describe('<Footer />', () => {
  test('footer successfully mounted', () => {
    expect(footer.length).toEqual(1);
  });
  test('Render del title ', () => {
    expect(footer.find(".Footer-title").text()).toEqual('Platzi Store')
  })
});

describe('Footer SnapShot', () => {
  test('comprobar la IU del component footer ', () => {
    const footer = create(<Footer></Footer>)
    expect(footer.toJSON()).toMatchSnapshot()
  })
})