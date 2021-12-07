import PropTypes from "prop-types"
import styles from "./transaction.module.css"
const TransactionHistory=({items})=>{
  return(
<table className={styles.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
{items.map(item=>(
  <tbody key={item.id} className="trnsaction-item">
    <tr >
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
    </tbody>
    ))}
</table>
  )}

TransactionHistory.propTypes={
  items: PropTypes.object.isRequired
}
export default TransactionHistory