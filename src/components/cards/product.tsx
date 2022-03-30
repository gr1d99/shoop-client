import { Link } from 'react-router-dom';
import { shape, string } from 'prop-types';

import { ProductCardBase, ProductCardImage, ProductCardImageContainer } from '../../utils/themes';
import { IProduct } from '../../interfaces';
import { routeBuilder } from '../../utils/routes';

interface Props {
  product: IProduct;
}

const ProductCard = ({ product }: Props) => {
  const { attributes } = product;
  const { images, name, price, slug } = attributes;
  const image = images?.split(/,/)?.[0] || '';

  return (
    <div className={ProductCardBase}>
      <Link to={routeBuilder.productDetail(slug)}>
        <div className={ProductCardImageContainer}>
          <img src={image} alt={name} className={ProductCardImage} />
        </div>
        <div className="relative mt-4">
          <h3 className="text-sm font-medium text-gray-900">{name}</h3>
          <p className="mt-1 text-sm text-gray-500"></p>
        </div>
      </Link>
      <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
        />
        <p className="relative text-lg font-semibold text-white">{price}</p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: shape({
    id: string,
    attributes: shape({
      name: string,
      price: string,
      image: string
    })
  }).isRequired
};

export { ProductCard };
