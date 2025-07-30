import React, { useState } from "react";

function AddItemForm({ addItem }) {
    const [itemName, setItemName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (itemName.trim()) {
            addItem(itemName);
            setItemName('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"    
                placeholder="Enter an item" 
                value={itemName} 
                onChange={(e) => setItemName(e.target.value)} 
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddItemForm;