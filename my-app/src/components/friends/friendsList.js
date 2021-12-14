import PropTypes from 'prop-types';
import style from './friends.module.css';
import FriendListItem from './friendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map(e => (
        <FriendListItem
          key={e.id}
          isOnline={e.isOnline}
          name={e.name}
          avatar={e.avatar}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = { friends: PropTypes.array.isRequired };
export default FriendList;
