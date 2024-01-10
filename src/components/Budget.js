import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, remaining, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        if (event.target.value > 20000) {
            alert("The value cannot exceed remaining funds  £" + remaining);
            return;
        }

        if (expenses > event.target.value) {
            alert("You cannot reduce budget value lower than the spending");
            return;
        }

    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: ${budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;