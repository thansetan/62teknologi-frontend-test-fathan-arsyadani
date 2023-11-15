import { AppBar, Toolbar, Typography } from '@mui/material'

const Footer = () => {
    return (
        <AppBar
            position="static"
            color="primary"
            sx={{
                top: 'auto',
                bottom: 0,
                width: '100%',
                marginTop: 5,
            }}
        >
            <Toolbar
                sx={{
                    justifyContent: 'center',
                }}
            >
                <Typography variant="h6">
                    ©️ {new Date().getFullYear()} - mep 🦚
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Footer
