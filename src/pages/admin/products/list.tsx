import { Link } from 'react-router-dom';

import { useFetchProducts } from '../../../hooks/use-fetch-products';
import { routeBuilder } from '../../../utils/routes';
import { Table } from 'antd';
import { IProduct } from '../../../interfaces';

interface ITableColumns {
  title: string;
  dataIndex: string;
  key: string;
  render?: (text: string) => React.ReactNode | string;
}

const AdminProductsList = () => {
  const { products, loading } = useFetchProducts();

  if (loading) {
    return <div>Loading...</div>;
  }

  const columns: ITableColumns[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <Link to={routeBuilder.productDetail(text)}>{text}</Link>
    }
  ];

  const dataSource = products.map((product: IProduct) => {
    const { id, attributes } = product;
    const { name } = attributes;

    return { key: id, name };
  });

  return <Table columns={columns} dataSource={dataSource} />;
};

export default AdminProductsList;
