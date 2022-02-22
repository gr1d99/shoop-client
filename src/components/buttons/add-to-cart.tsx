import { string } from 'prop-types';

import { AddToCartBtn } from '../../utils/themes';
import { IProduct } from '../../interfaces';

interface IProps {
  name: string;
  handleOnClick: Function;
  product: IProduct;
}

const AddToCartButton = ({ name, handleOnClick, product }: IProps) => {
  return (
    <button
      type="button"
      className={AddToCartBtn}
      data-testid="add-to-cart-btn"
      onClick={() => {
        handleOnClick(product);
      }}>
      <span className="sr-only">Add {product.attributes.name} to cart</span>
      {name}
    </button>
  );
};

AddToCartButton.propTypes = {
  name: string.isRequired
};

export { AddToCartButton };
