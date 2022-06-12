import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name &nbsp;
    <input
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
      title="filter"
      required
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
