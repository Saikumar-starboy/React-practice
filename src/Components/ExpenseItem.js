import "./ExpenseItem.css";
import Expensedate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails.js"

function expenseItem(props) {
  
  return (
    <div>
      <div  className="expense-item">
       <Expensedate date={props.date}/>
       <ExpenseDetails title={props.title} amount={props.amount}/>
        
      </div>
    </div>
  );
}

export default expenseItem;
