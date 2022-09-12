import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import Cart from '../components/Cart'

const mockItem = {
  id: '001',
  src: 'src/assets/electronics/geforce-rtx-3080-ti.jpg',
  price: '400',
  name: 'Graphic Card',
}

const mockSetIsCartClicked = jest.fn()
const mockSetIsAnimationStart = jest.fn()
describe('Cart component', () => {
  it('should render properly', () => {
    const container = render(
      <Cart items={[mockItem]} setIsCartClicked={mockSetIsCartClicked} />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render 2 items', () => {
    render(
      <Cart
        items={[mockItem, mockItem]}
        setIsCartClicked={mockSetIsCartClicked}
      />
    )
    const items = screen.getAllByTestId('show-items')
    expect(items.length).toBe(2)
  })

  it('should called setIsCartClicked with false when close icon is cliced', () => {
    render(
      <Cart
        items={[mockItem, mockItem]}
        setIsCartClicked={mockSetIsCartClicked}
      />
    )
    const clickElement = screen.getByTestId('close-cart')
    const div = screen.getByTestId('cart-div')
    userEvent.click(clickElement)
    fireEvent.animationEnd(div)
    expect(mockSetIsCartClicked).toBeCalledWith(false)
  })
})
