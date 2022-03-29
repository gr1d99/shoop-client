import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { AddToCartButton } from '../add-to-cart';
import { IProduct } from '../../../interfaces';

const product: IProduct = {
  id: 41,
  attributes: {
    slug: 'odit',
    name: 'odit',
    images: 'https://placehold.it/300x300.png',
    price: 998.0,
    description: 'Iusto ea et et.',
    brand_id: 11
  }
};

describe('<AddToCartButton', () => {
  it('adds product to cart when clicked', () => {
    const handleClickFn = jest.fn();

    render(
      <AddToCartButton label={'Add to Cart'} handleOnClick={handleClickFn} product={product} />
    );

    userEvent.click(screen.getByTestId('add-to-cart-btn'));

    expect(handleClickFn.mock.calls).toHaveLength(1);
  });
});
