import TransactionCard from './TransactionCard';

export default function TransactionList({ transactions }) {
    function loaded() {
        const allTransactions = transactions.map((transaction) => {
            return <TransactionCard transaction={transaction} key={transaction.trans_id} />
        });

        return allTransactions;
    }

    return (
        <div className="list transaction-list">
            {transactions ? loaded() : <h2>Loading Transaction list...</h2>}
        </div>
    );
}
