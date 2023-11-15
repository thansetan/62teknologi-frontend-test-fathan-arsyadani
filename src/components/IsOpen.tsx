import { styled } from '@mui/material'

interface isOpenProps {
    isOpen: boolean
}

const Status = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    marginLeft: theme.spacing(0.5),
    borderRadius: theme.spacing(0.5),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    width: theme.spacing(20),
    height: theme.spacing(5),
    fontSize: theme.spacing(3),
    fontWeight: 'bold',
}))

const IsOpen = ({ isOpen }: isOpenProps) => {
    return (
        <Status
            sx={{
                backgroundColor: isOpen ? 'green' : 'red',
            }}
        >
            {isOpen ? 'Open' : 'Closed'}
        </Status>
    )
}

export default IsOpen
