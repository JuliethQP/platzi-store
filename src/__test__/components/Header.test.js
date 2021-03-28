import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';
import { create } from 'react-test-renderer'

describe('<Header></Header>', () => {
  test('render del component', () => {
    const header = shallow(
      <ProviderMock>
        <Header></Header>
      </ProviderMock>
    )
    expect(header.length).toEqual(1)
  })
  test('render del titulo', () => {
    const header = mount(
      <ProviderMock>
        <Header></Header>
      </ProviderMock>
    )
    expect(header.find(".Header-title").text()).toEqual('Platzi Store')
  })
})

describe('Header snapshot', () => {
  test('Comprobar el shanpshot de header ', () => {
    const header = create(
      <ProviderMock>
        <Header></Header>
      </ProviderMock>
    )
    expect(header.toJSON()).toMatchSnapshot()
  })
})

// los snapshot garantizan que la iu siempre sea la misma
