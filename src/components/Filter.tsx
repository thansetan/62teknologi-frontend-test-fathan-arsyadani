import { useState } from 'react'
import {
    Switch,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormControlLabel,
    FormHelperText,
    Typography,
    Box,
} from '@mui/material'

interface FilterProps {
    onOpenChange: (data: boolean) => void
    onSortChange: (data: string) => void
}

const Filter = ({ onOpenChange, onSortChange }: FilterProps) => {
    const [openNow, setOpenNow] = useState(false)
    const [sortBy, setSortBy] = useState('best_match')
    return (
        <Box>
            <Typography variant="h6" fontWeight="bold" mb={2}>
                Filter
            </Typography>
            <FormControl fullWidth>
                <InputLabel>Sort By</InputLabel>
                <Select
                    value={sortBy}
                    label="sort_by"
                    onChange={(e) => {
                        setSortBy(e.target.value as string)
                        onSortChange(e.target.value as string)
                    }}
                >
                    <MenuItem value="best_match">Best Match</MenuItem>
                    <MenuItem value="rating">Rating</MenuItem>
                    <MenuItem value="review_count">Review Count</MenuItem>
                </Select>
                <FormHelperText>
                    Sort businesses by different criteria
                </FormHelperText>
                <FormControlLabel
                    control={
                        <Switch
                            checked={openNow}
                            onChange={(e) => {
                                setOpenNow(e.target.checked)
                                onOpenChange(e.target.checked)
                            }}
                        />
                    }
                    label="Open Now"
                />
                <FormHelperText>
                    Only display businesses that are currently open
                </FormHelperText>
            </FormControl>
        </Box>
    )
}

export default Filter
