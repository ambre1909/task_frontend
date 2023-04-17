import React, { useEffect, useState } from 'react'
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import { useDispatch, useSelector } from 'react-redux'
import { addEventAction, getEventAction } from '../store/users/userActions'

const Calender = () => {
    const { allEvents } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [selectedDate, setSelectedDate] = useState("2023-04-01")
    const [inp, setInp] = useState({
        date: "",
        desc: "Learn Typscript",
        startTime: "1:00",
        endTime: "2:00"
    })
    const [events, setEvents] = useState([
    ])
    const createEvent = () => {
        console.log({ ...inp, date: selectedDate })
        setEvents([...events, { title: `${inp.desc} - ${inp.startTime}`, date: selectedDate }])
        dispatch(addEventAction(inp))

    }
    useEffect(() => {
        dispatch(getEventAction(selectedDate))
    }, [selectedDate])


    return <div className="container">
        <h2>{JSON.stringify(inp)}</h2>
        <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            dateClick={arg => {
                const m = new bootstrap.Modal("#eventModal")
                m.show()
                setSelectedDate(arg.dateStr)
                setInp({ ...inp, date: arg.dateStr })
            }}
            events={events}


        />

        <div class="modal fade" id="eventModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Date : {selectedDate}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input
                            type="text"
                            className='form-control'
                            value={inp.desc}
                            placeholder='Enter description of event'
                            onChange={e => setInp({ ...inp, desc: e.target.value })} /> <br />
                        <div>
                            <label htmlFor="">Enter start Time</label>
                            <input
                                type="time"
                                className='form-control'
                                value={inp.startTime}
                                placeholder='Enter start Time of event'
                                onChange={e => setInp({ ...inp, startTime: e.target.value })} />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="">Enter end Time </label>
                            <input
                                type="time"
                                className='form-control'
                                value={inp.endTime}
                                placeholder='Enter end Time of event'
                                onChange={e => setInp({ ...inp, endTime: e.target.value })} />
                        </div>
                        <br />


                        <button
                            data-bs-dismiss="modal"
                            onClick={createEvent}
                            type="button"
                            class="btn btn-primary mx-2">Add Event</button>
                        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">More</button>

                    </div>

                </div>
            </div>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Date : {selectedDate}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">


                        <tbody>
                            {

                                allEvents ? allEvents.map(item => <table class="table table-light table-striped table-hover">
                                    <hr />
                                    <tr>
                                        <td > <span className='text-primary'>Start Time :  </span> {item.startTime}</td>
                                        <td ><span className='text-primary'> end Time :</span> {item.endTime}</td>
                                        <td  > <span className='text-primary'> end Time :</span> {item.desc}</td>
                                    </tr>
                                    <hr />
                                </table>)
                                    :
                                    <h4>Add Event</h4>
                            }

                        </tbody>




                    </div>

                </div>
            </div>
        </div>
    </div>




}

export default Calender