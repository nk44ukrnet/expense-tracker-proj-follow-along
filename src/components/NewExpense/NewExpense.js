import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
import {useState} from "react";


function NewExpense(props) {

    const [isEditing, setIsEditing] = useState(false);

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random() + '',
        }
        props.onAddExpense(expenseData);
        // console.log(expenseData);
    }

    function startEditingHandler() {
        setIsEditing(true);
    }

    function stopEditingHandler() {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing &&
            <button onClick={startEditingHandler}>Add new Expense</button>
            }
            {isEditing &&
            <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onCancel={stopEditingHandler}
            />
            }
        </div>
    );
}

export default NewExpense;