export default function AccountDropdown({ accounts, accountAction, dropdownValue, setDropdownValue }) {

    function handleChange(e) {
        setDropdownValue(e.target.value || null);
    }

    function loaded() {
        return(
            <>
                <label htmlFor={`${accountAction.toLowerCase()}AccountId`}>
                    <p>{accountAction} Account ID:</p>
                    <select value={dropdownValue || ''} onChange={handleChange} >
                        <option value={''}>None</option>
                        {accounts.map((account) => {
                            return <option value={account.account_id} key={account.account_id}>{account.name}</option>
                        })}
                    </select>
                </label>
            </>
        );
    }

    return accounts ? loaded() : <h2>Loading dropdown...</h2>;
}
