import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setisEdititng] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setisEdititng(false)
  };

  const startEditingHandler =()=>{
    setisEdititng(true);
  }

  const stopEditingHandler = () => {
    setisEdititng(false);
  }
  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditingHandler}>Add new expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} OnCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;