import PropTypes  from "prop-types";
import  styles from "./friends.module.css"

const FriendListItem=({id,isOnline,name,avatar})=>{
return(
<li key={id} className={styles.item}>
<span className={isOnline ? styles["online"] : styles["offline"]}></span>
  <img className="avatar" src={avatar} alt={name} width="48" />
  <p className="name">{name}</p>
</li>
)
}

FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
}
// console.log(FriendListItem({PropTypes}));

export default FriendListItem