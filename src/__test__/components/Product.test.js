import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import ProductMock from '../../__mocks__/ProductMock';
import Product from '../../components/Product';

describe('', () => {
  test('Render del component product ', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>
    )
    expect(product.length).toEqual(1)
  }) 
  test('comprobar el boton comprar ', () => {
    const handleAddToCart = jest.fn()
    const wrapper = mount(
      <ProviderMock>
        <Product
          product={ProductMock}
          handleAddToCart={handleAddToCart} />
      </ProviderMock>
    )
    wrapper.find('button').simulate('click')
    expect(handleAddToCart).toHaveBeenCalledTimes(1)
  })
})



