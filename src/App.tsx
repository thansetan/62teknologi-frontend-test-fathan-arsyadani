import './App.css'
import Business from './components/Business'
import Businesses from './components/Businesses'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './components/Home'
import Header from './components/Header'
import NotFound from './components/NotFound'
import { Box, ThemeProvider, createTheme, colors } from '@mui/material'
import { useState } from 'react'

function App() {
    const [isDark, setTheme] = useState(
        localStorage.getItem('theme') === 'dark' || false
    )
    const lightTheme = createTheme({
        palette: {
            mode: 'light',
        },
    })

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            text: {
                primary: colors.blue[500],
                secondary: colors.blue[100],
            },
        },
        components: {
            MuiTypography: {
                variants: [
                    {
                        props: {},
                        style: {
                            color: colors.blue[900],
                        },
                    },
                ],
            },
        },
    })

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <Box
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    backgroundColor: isDark
                        ? darkTheme.palette.background.default
                        : lightTheme.palette.background.default,
                }}
            >
                <BrowserRouter>
                    <Header isDark={isDark} onThemeChange={setTheme} />
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
            </Box>
        </ThemeProvider>
    )
}

export default App
