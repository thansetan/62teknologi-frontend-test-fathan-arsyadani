import {
    AppBar,
    Container,
    Toolbar,
    Typography,
    TextField,
    Switch,
    FormControlLabel,
} from '@mui/material'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface HeaderProps {
    onThemeChange: (isDark: boolean) => void
    isDark: boolean
}
const Header = ({ onThemeChange, isDark }: HeaderProps) => {
    const [input, setInput] = useState('')
    const navigate = useNavigate()

    return (
        <AppBar
            position="sticky"
            color="default"
            sx={{
                marginBottom: 5,
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: 'flex',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        🦚{'YELP'.split('').reverse().join('')}
                    </Typography>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={isDark}
                                onChange={(e) => {
                                    localStorage.setItem(
                                        'theme',
                                        e.target.checked ? 'dark' : 'light'
                                    )
                                    onThemeChange(e.target.checked)
                                }}
                            />
                        }
                        sx={{
                            ml: 'auto',
                            mr: 'auto',
                        }}
                        label="dark mode"
                    />

                    <TextField
                        placeholder={`try "New York"`}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        label="Search"
                        variant="outlined"
                        fullWidth
                        size="small"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                if (input === '') {
                                    window.alert('Please enter a location')
                                    return
                                }
                                navigate('/biz', { state: { location: input } })
                            }
                        }}
                        sx={{
                            width: '30%',
                            ml: 'auto',
                        }}
                    />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
