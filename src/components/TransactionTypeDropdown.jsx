export default function TransactionTypeDropdown({ dropdownValue, setDropdownValue }) {

    function handleChange(e) {
        setDropdownValue(e.target.value);
    }

    return (
        <>
            <label htmlFor="transType">Transaction Type:</label>
            <select value={dropdownValue} onChange={handleChange} >
                <option value={'Expense'}>Expense</option>
                <option value={'Income'}>Income</option>
                <option value={'Transfer'}>Transfer</option>
            </select>
        </>
    );
}
