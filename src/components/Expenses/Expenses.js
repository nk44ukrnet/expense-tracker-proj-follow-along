import React, {useState} from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYears, setFilteredYear] = useState('2021');

    function filterChangeHandler(selectedYear) {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYears;
    });



    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYears} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
            {/*{*/}
            {/*    props.items.map((expense) => {*/}
            {/*            return <ExpenseItem key={expense.id}*/}
            {/*                         title={expense.title}*/}
            {/*                         amount={expense.amount}*/}
            {/*                         date={expense.date}*/}
            {/*            />*/}
            {/*        }*/}
            {/*    )*/}
            {/*}*/}

        </Card>
    );
}

export default Expenses;
