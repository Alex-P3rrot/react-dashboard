import {
    Box,
    Button,
    Dialog,
    FormControl, Popover,
    Stack,
    TextField,
    Typography,
    useTheme
} from "@mui/material";
import Header from "../components/Header";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid'
import multiMonthPlugin from '@fullcalendar/multimonth'
import {useState} from "react";
import {themeColors} from "../theme";
import {StyledTextarea} from "../components/StyledTextarea";

const ACTIONS = {
    create: 'create',
    edit: 'edit'
}

export function Calendar() {
    const initialStateEventFormData = {id: 0, title: '', description: '', start: ''}
    const theme = useTheme()
    const colors = themeColors(theme.palette.mode)
    const [events, setEvents] = useState([])
    const [eventFormData, setEventFormData] = useState(initialStateEventFormData)
    const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)
    const [isEditing, setIsEditing] = useState(false)
    const [selectedEventId, setSelectedEventId] = useState(null)
    const [selectedEvent, setSelectedEvent] = useState({title: '', description: ''})
    let openPopover = Boolean(anchorEl)
    const handleSelectDate = (event) => {
        setEventFormData(prevState => ({...prevState, start: event.start, id: events.length}))
        setOpen(true)
    }
    const handleSaveEvent = type => {
        setOpen(false)
        if (type === ACTIONS.create) {
            setEvents(prevState => [...prevState, eventFormData])
        }
        if (type === ACTIONS.edit) {
            setEvents(prevState => prevState.filter(el => el.id !== selectedEventId))
            setEvents(prevState => [...prevState, selectedEvent])
            setIsEditing(false)
        }
        setAnchorEl(null)
        setEventFormData(initialStateEventFormData)
    }
    const handleEdit = () => {
        const event = events.find(el => el.id === selectedEventId)
        setSelectedEvent(event)
        setOpen(true)
    }
    const handleDelete = () => {
        // const toEdit = events.find(el => el.id === parseInt(e.event.id))
        // setEditing(toEdit)
    }
    const handleClosePopover = () => {
        setAnchorEl(null)
    }
    const handleCloseDialog = () => {
        setOpen(false)
        setEventFormData(initialStateEventFormData)
    }

    return (
        <Box padding={2}>
            <Popover
                open={openPopover}
                anchorEl={anchorEl}
                onClose={handleClosePopover}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}>
                <Box padding={3} display="flex" gap={2} backgroundColor={colors.palette.sidebar.backgroundColor}>
                    <Button onClick={handleDelete} sx={{width: 120, backgroundColor: "#f3a6a6"}}>Supprimer</Button>
                    <Button onClick={handleEdit} sx={{width: 120, backgroundColor: "#f8d79b"}}>Editer</Button>
                </Box>
            </Popover>
            <Header title="Calendrier" subtitle="Calendrier interactif"/>
            <FullCalendar
                height="75vh"
                plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, multiMonthPlugin]}
                selectable={true}
                editable={true}
                select={handleSelectDate}
                events={events || []}
                eventClick={infos => {
                    setIsEditing(true)
                    setSelectedEventId(Number(infos.event.id))
                    setAnchorEl(infos.el)
                }}
                headerToolbar={{
                    left: 'dayGridMonth dayGridWeek dayGridDay',
                    center: 'title',
                    right: 'prev,next today'
                }}>
            </FullCalendar>
            <Dialog open={open} onClose={handleCloseDialog}>
                <Box width="50vw" height="75hv" padding={5} backgroundColor={colors.palette.background.default}>
                    <Typography variant="h6" textAlign="center">Create new event</Typography>
                    <Stack spacing={2}>
                        <FormControl>
                            <TextField autoFocus
                                       required
                                       placeholder="Title"
                                       value={isEditing ? selectedEvent.title : eventFormData.title}
                                       onChange={event => {
                                           if (isEditing) {
                                               setSelectedEvent(prevState => (
                                                   {...prevState, title: event.target.value}
                                               ))
                                           } else {
                                               setEventFormData(prevState => (
                                                   {...prevState, title: event.target.value}
                                               ))
                                           }
                                       }}/>
                        </FormControl>
                        <FormControl>
                            <StyledTextarea minRows={5}
                                            required={true}
                                            placeholder="Description"
                                            value={isEditing ? selectedEvent.description : eventFormData.description}
                                            onChange={event => {
                                                if (isEditing) {
                                                    setSelectedEvent(prevState => (
                                                        {...prevState, description: event.target.value}
                                                    ))
                                                } else {
                                                    setEventFormData(prevState => (
                                                        {...prevState, description: event.target.value}
                                                    ))
                                                }
                                            }}/>
                        </FormControl>
                        <Button
                            onClick={() => isEditing ? handleSaveEvent(ACTIONS.edit) : handleSaveEvent(ACTIONS.create)}>Save</Button>
                    </Stack>
                </Box>
            </Dialog>
        </Box>
    )
}