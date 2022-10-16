import TransactionCard from './TransactionCard';

export default function TransactionList({ transactions, isDetail, setCurrentTransaction }) {
    let style;
    if (isDetail) {
        style = 'detail-list';
    } else {
        style = '';
    }
    
    function loaded() {
        const allTransactions = transactions.map((transaction) => {
            return <TransactionCard transaction={transaction} isDetail={isDetail} setCurrentTransaction={setCurrentTransaction} key={transaction.trans_id} />
        });

        return allTransactions;
    }

    return (
        <div className={`list transaction-list ${style}`}>
            {transactions ? loaded() : <h2>Loading Transaction list...</h2>}
        </div>
    );
}
