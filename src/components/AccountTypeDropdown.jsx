export default function AccountTypeDropdown({ dropdownValue, setDropdownValue }) {

    function handleChange(e) {
        setDropdownValue(e.target.value);
    }

    return (
        <>
            <label htmlFor="accountType">Account Type:</label>
            <select value={dropdownValue} onChange={handleChange} >
                <option value={'Depository'}>Depository</option>
                <option value={'Credit'}>Credit</option>
                <option value={'Loan'}>Loan</option>
                <option value={'Investment'}>Investment</option>
                <option value={'Other'}>Other</option>
            </select>
        </>
    );
}
