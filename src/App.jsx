import './App.css';
import AccountList from './components/AccountList';
import InstitutionList from './components/InstitutionList';
import UserList from './components/UserList';

function App() {
    return (
        <>
            <h1>Thrift App</h1>
            <UserList />
            <InstitutionList />
            <AccountList />
        </>
    );
}

export default App;
