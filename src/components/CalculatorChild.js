import PropTypes from 'prop-types';

function Heading({ value }) {
  return (
    <>
      <div className="">{value}</div>

    </>
  );
}

Heading.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Heading;
