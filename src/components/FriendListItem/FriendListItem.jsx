import PropTypes from 'prop-types';
import css from 'components/FriendListItem/FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const offlineColor = { backgroundColor: 'orangered' };
  return (
    <li className={css.item}>
      {isOnline ? (
        <span className={css.status} />
      ) : (
        <span className={css.status} style={offlineColor} />
      )}
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
