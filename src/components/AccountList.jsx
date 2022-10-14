import AccountCard from "./AccountCard";

export default function AccountList({ accounts, setCurrentAccount }) {
    function loaded() {
        const allAccounts = accounts.map((account) => {
            return <AccountCard account={account} setCurrentAccount={setCurrentAccount} key={account.account_id} />;
        });

        return allAccounts;
    }

    return (
        <div className="list account-list">
            {accounts ? loaded() : <h2>Loading Account list...</h2>}
        </div>
    );
}
