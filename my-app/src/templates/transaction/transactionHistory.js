import PropTypes from "prop-types"
import "./transaction.module.css"
const TransactionHistory=({items})=>{
  return(
<table className="transaction-history">
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