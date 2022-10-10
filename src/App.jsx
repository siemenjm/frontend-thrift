import './App.css';
import AccountList from './components/AccountList';
import InstitutionList from './components/InstitutionList';
import TransactionList from './components/TransactionList';
import UserList from './components/UserList';

function App() {
    return (
        <>
            <h1>Thrift App</h1>
            <UserList />
            <InstitutionList />
            <AccountList />
            <TransactionList />
        </>
    );
}

export default App;
