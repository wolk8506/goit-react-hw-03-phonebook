import PropTypes from 'prop-types';

import s from 'components/ContactList/ContactList.module.css';
export const ContactList = ({ data, onDeleteContact }) => (
  <ul className={s.list}>
    {data.map(c => (
      <li className={s.item} key={c.id}>
        <p>
          {c.name} : {c.number}
        </p>
        <button
          className={s.btn}
          type="button"
          onClick={() => onDeleteContact(c.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
