import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired
}

Container.defaultProps = {
  children: null
}

export default Container;

