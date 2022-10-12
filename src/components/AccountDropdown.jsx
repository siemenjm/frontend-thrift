export default function AccountDropdown({ accounts, accountAction, creditedDropdownValue, setCreditedDropdownValue }) {

    function handleChange(e) {
        setCreditedDropdownValue(e.target.value || null);
    }

    function loaded() {
        return(
            <>
                <label htmlFor={`${accountAction.toLowerCase()}AccountId`}>{accountAction} Account ID:</label>
                <select value={creditedDropdownValue || ''} onChange={handleChange} >
                    <option value={''}>None</option>
                    {accounts.map((account) => {
                        return <option value={account.account_id} key={account.account_id}>{account.name}</option>
                    })}
                </select>
            </>
        );
    }

    return accounts ? loaded() : <h2>Loading dropdown...</h2>;
}
