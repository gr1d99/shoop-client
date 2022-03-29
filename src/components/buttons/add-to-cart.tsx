import { func, number, shape, string } from 'prop-types';

import { AddToCartBtn } from '../../utils/themes';
import { IProduct } from '../../interfaces';

interface IProps {
  label: string;
  handleOnClick: (product: IProduct) => void;
  product: IProduct;
}

const AddToCartButton = ({ label, handleOnClick, product }: IProps) => {
  const { attributes } = product;
  const { name } = attributes;
  return (
    <button
      type="button"
      className={AddToCartBtn}
      data-testid="add-to-cart-btn"
      onClick={() => {
        handleOnClick(product);
      }}>
      <span className="sr-only">Add {name} to cart</span>
      {label}
    </button>
  );
};

AddToCartButton.propTypes = {
  label: string.isRequired,
  handleOnClick: func.isRequired,
  product: shape({
    id: string,
    attributes: shape({
      name: string
    })
  }).isRequired
};

export { AddToCartButton };
