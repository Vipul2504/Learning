
import { useState } from "react"
import Card from "../UI/Card"
import ExpenseItem from "./Expense"
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpensesFilter"

const [filtered, setFilter] = useState('2020');

const filterChangeHandler = (filterYear) => {
  setFilter(filterYear)
}

const filteredExpense = props.items.filter(expense => {
  return expense.date.getFullYear().toString() === filtered
})

const ExpenseAll = (props) => {
    return (
        <div>
          <Card classname="">
            <ExpensesFilter selected={filtered}
            onChangeFilter={filterChangeHandler}>
            </ExpensesFilter>
            <ExpenseChart expense={filteredExpense}/>
      <ExpenseList items={filteredExpense}/>
          </Card>
       
    </div>
    )
}

export default ExpenseAll