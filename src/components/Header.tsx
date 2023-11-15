import {
    AppBar,
    Container,
    Toolbar,
    Typography,
    TextField,
} from '@mui/material'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const [input, setInput] = useState('')
    const navigate = useNavigate()

    return (
        <AppBar
            position="sticky"
            color="primary"
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
                    <TextField
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        label="Search"
                        variant="filled"
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
                        InputProps={{
                            style: { backgroundColor: 'white' },
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
