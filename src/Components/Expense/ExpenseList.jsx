import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'

const ExpenseList = props => {
    if(props.items.length === 0){
        return <h2 className="expense-list__fallback">Found no Expense</h2>
    }
    return(
        <ul className="expense-list">
            {filteredExpense.length === 0 && <p>No Expense Found</p>}
            {filteredExpense.length > 0 && filteredExpense.map(expense => {
              <ExpenseItem title={expense.title}
              amount={expense.amount}
              date={expense.date}/>            
              })}
        </ul>
        
    )
}

export default ExpenseList;