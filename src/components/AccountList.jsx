import AccountCard from "./AccountCard";

export default function AccountList({ accounts, isDetail, setCurrentAccount }) {
    function loaded() {
        const allAccounts = accounts.map((account) => {
            return <AccountCard account={account} isDetail={isDetail} setCurrentAccount={setCurrentAccount} key={account.account_id} />;
        });

        return allAccounts;
    }

    return (
        <div className="list account-list">
            {accounts ? loaded() : <h2>Loading Account list...</h2>}
        </div>
    );
}
