import { Helmet } from 'react-helmet';

const withHelmet =
  (Component) =>
  (attrs = { title: '' }) => {
    return (props) => {
      return (
        <>
          <Helmet>
            <title>{`Ecom - ${attrs.title}`}</title>
          </Helmet>
          <Component {...props} />
        </>
      );
    };
  };

export default withHelmet;
