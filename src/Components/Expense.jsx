import './Expense.css'

function Expense(){
    const ExpenseDate = new Date();
    const ExpenseTitle = 'Car insurancxe';
    const ExpenseAmnt = 300;
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