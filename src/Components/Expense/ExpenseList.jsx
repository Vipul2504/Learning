import ExpenseItem from "./ExpenseItem";

const ExpenseList = props => {
    return(
        <div>
            {filteredExpense.length === 0 && <p>No Expense Found</p>}
            {filteredExpense.length > 0 && filteredExpense.map(expense => {
              <ExpenseItem title={expense.title}
              amount={expense.amount}
              date={expense.date}/>            
              })}
        </div>
    )
}

export default ExpenseList;