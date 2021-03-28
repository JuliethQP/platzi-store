//para probar fetch es necesario un mock 
import getData from '../../utils/getData';

describe('fetch API', () => {
  beforeEach(() => { // if you have an existing `beforeEach` just add the following line to it
    fetch.resetMocks()
  })
  test('llamar una API y retorna datos ', () => {
    fetch.mockResponse(JSON.stringify({ data: '12345' }))
  })
  getData('https://www.google.com.co/')
  .then((response)=>{
    expect(response.data).toEqual('12345')
  })
  expect(fetch.mock.calls[0][0]).toEqual('https://www.google.com.co/')
})
