import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material'
import { OpeningHourPerDay } from '../types'
import formatTime from '../services/time'
import { Fragment } from 'react'
interface OpenHoursProps {
    openHours: OpeningHourPerDay[]
}

const Days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
]

const OpenHours = ({ openHours }: OpenHoursProps) => {
    return (
        <TableContainer component={Paper}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        {openHours.map((openHour, ix) => (
                            <TableCell key={ix} colSpan={2} align="center">
                                <Typography fontWeight="bold">
                                    {Days[openHour.day]}
                                </Typography>
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        {openHours.map((openHour) => (
                            <Fragment key={openHour.day}>
                                <TableCell>
                                    <Typography fontWeight="bold">
                                        Open
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography fontWeight="bold">
                                        Close
                                    </Typography>
                                </TableCell>
                            </Fragment>
                        ))}
                    </TableRow>
                </TableHead>

                <TableBody>
                    <TableRow>
                        {openHours.map((openHour, ix) => (
                            <Fragment key={ix}>
                                <TableCell>
                                    {formatTime(openHour.start)}
                                </TableCell>
                                <TableCell>
                                    {formatTime(openHour.end)}
                                </TableCell>
                            </Fragment>
                        ))}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default OpenHours
