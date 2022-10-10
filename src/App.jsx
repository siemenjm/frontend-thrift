import './App.css';
import InstitutionList from './components/InstitutionList';
import UserList from './components/UserList';

function App() {
    return (
        <>
            <h1>Thrift App</h1>
            <UserList />
            <InstitutionList />
        </>
    );
}

export default App;
