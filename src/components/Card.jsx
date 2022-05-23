import PropTypes from 'prop-types';

const Card = ({ bgImage, name, description, githubLink }) => {
  return (
    <>
      <a href={githubLink}>
        <div className="card" style={{ backgroundImage: `url(${bgImage})` }}>
          <h1 className="card-title">{name}</h1>
          <p className="card-description">{description}</p>
        </div >
      </a>
    </>

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