import Home from "./pages/HomePage/Home"
import Checkout from "./pages/CheckoutPage/Checkout"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { StoreProvider } from "./components/StoreProvider/Store";
import "./App.css"
function App() {
    return(
        <>
        <StoreProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                </Routes>
            </Router>
        </StoreProvider>
        </>
    )
}

export default App
