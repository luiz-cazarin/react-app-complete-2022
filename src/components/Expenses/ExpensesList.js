import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'
const ExpensesList = props => {
    return (
        <ul className="expenses-list">
            {
                props.items.length === 0 ?
                    <div className="expenses-list__fallback">No expenses found.</div>
                    :
                    <>
                        {props.items.map((el) => {
                            return (
                                <li>
                                    <ExpenseItem
                                        key={el.id}
                                        title={el.title}
                                        amount={el.amount}
                                        date={el.date}
                                    />
                                </li>
                            )
                        })
                        }
                    </>
            }
        </ul>
    )
};

export default ExpensesList;