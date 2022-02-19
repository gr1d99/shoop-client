import { string } from 'prop-types';

import { AddToCartBtn } from '../../utils/themes';

const AddToCartButton = ({ name, handleOnClick, product }) => {
  return (
    <button
      type="button"
      className={AddToCartBtn}
      data-testid="add-to-cart-btn"
      onClick={() => {
        handleOnClick(product);
      }}>
      <span className="sr-only">Add {product.name} to cart</span>
      {name}
    </button>
  );
};

AddToCartButton.propTypes = {
  name: string.isRequired
};

export { AddToCartButton };
