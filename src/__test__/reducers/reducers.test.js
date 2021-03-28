import { expect } from '@jest/globals';
import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers', () => {
  test('Retornar el initial state', () => {
    expect(reducer({}, '')).toEqual({})
  })
  
})
