const { render } = require('@testing-library/react')
import { BrowserRouter } from 'react-router-dom'
import Home from '../components/Home'

describe('Home component', () => {
  it('should render properly', () => {
    const container = render(<Home />, { wrapper: BrowserRouter });
    expect(container).toMatchSnapshot();
  })
})
