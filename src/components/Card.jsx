import PropTypes from 'prop-types';

const Card = ({ bgImage, title, description, link }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${bgImage})` }}>
      <a href={link}>
        <h1>{title}</h1>
        <p>{description}</p>
      </a>
    </div >
  );
}

Card.propTypes = {
  bgImage: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string
}

Card.defaultProps = {
  bgImage: 'https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg',
  title: '',
  description: '',
  link: 'htps://google.com/images/sad404.svg'
}



export default Card;