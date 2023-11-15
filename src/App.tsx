import './App.css'
import Business from './components/Business'
import Businesses from './components/Businesses'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './components/Home'
import Header from './components/Header'
import NotFound from './components/NotFound'

function App() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <BrowserRouter>
                <Header />
                <div style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/biz" element={<Businesses />} />
                        <Route path="/hello" element={<div>Hello</div>} />
                        <Route
                            path="/biz/:businessAlias"
                            element={<Business />}
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
