export default function InstitutionDropdown({ institutions, dropdownValue, setDropdownValue }) {

    function handleChange(e) {
        setDropdownValue(e.target.value);
    }

    function loaded() {
        return(
            <>
                <label htmlFor={'insId'}>
                    <p>Institution:</p>
                    <select value={dropdownValue} onChange={handleChange} >
                        {institutions.map((institution) => {
                            return <option value={institution.ins_id} key={institution.ins_id}>{institution.name}</option>
                        })}
                    </select>
                </label>
            </>
        );
    }

    return institutions ? loaded() : <h2>Loading dropdown...</h2>;
}
