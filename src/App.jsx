import './App.css';
import { UrlContext } from './context/UrlContext';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

const BASE_URL = 'http://localhost:4000';

function App() {
    return (
        <>
            <UrlContext.Provider value={{
                BASE_URL,
            }} >
                <Sidebar />
                <Main />
            </UrlContext.Provider>
        </>
    );
}

export default App;
