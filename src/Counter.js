import { useState } from 'react';

function Counter() {
    const [fruits, setFruits] = useState(["Apple", "Banana"]);
    const [newFruit, setNewFruit] = useState("");

    const handleAdd = () => {
        if (newFruit.trim() !== "") {
            setFruits([...fruits, newFruit.trim()]);
            setNewFruit("");
        }
    };

    return (
        <div>
            <h2>Fruit List</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>

            <input
                type="text"
                value={newFruit}
                onChange={(e) => setNewFruit(e.target.value)}
                placeholder="Add a fruit..."
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}

export default Counter;