import React, { useState } from "react";
import "./ExpenseItem.css";
import Expensedate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails.js";

const ExpenseItem = (props) => { 

  const [amount , setAmount] = useState(props.amount);

  const clickHandler = () => {
    setAmount('100');
    console.log(amount);
  }

  return (
    <div>
      <div  className="expense-item">
       <Expensedate date={props.date}/>
       <ExpenseDetails title={props.title} amount={amount}/>
       <button onClick={clickHandler}>changeAmount</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
