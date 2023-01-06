import './Expense.css'

function Expense(props){
    
    return (
        <div className="expense-item">
            <div>{ExpenseDate.toUTCString()}</div>
            <div className="expense-item__description">
                <h2>{ExpenseTitle}</h2>
                <div className="expense-item__price">${ExpenseAmnt}</div>
            </div>
        </div>
    )
}

export default Expense