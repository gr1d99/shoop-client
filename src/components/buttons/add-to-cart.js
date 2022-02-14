import { string } from 'prop-types';

import { AddToCartBtn } from '../../utils/themes';

const AddToCartButton = ({ name }) => {
  return (
    <button type="button" className={AddToCartBtn}>
      Add to bag<span className="sr-only">, {name}</span>
    </button>
  );
};

AddToCartButton.propTypes = {
  name: string.isRequired
};

export { AddToCartButton };
