import { useState, useEffect } from 'react'

const DatePicker = ({dataHandler}) => {
    const currentTime = new Date()
    const currentYear = currentTime.getFullYear();
    const currentMonth = currentTime.getMonth() + 1;
    const currentDay = currentTime.getDate();

    const [date, setDate] = useState({ year: currentYear, month: currentMonth, day: currentDay, maxDate: 30 })
    var years = [];
    var months = [];
    var days = [];
    var listTimes = () => {
        for (let y = 1970; y <= currentYear; y++)
            years.push(y)

        for (let m = 1; m <= 12; m++)
            months.push(m)

        for (let d = 1; d <= date.maxDate; d++)
            days.push(d)
    }
    listTimes()

    var datepicked = new Date(`${date.year}/${date.month}/${+date.day+1}`).toISOString()

    var setMaxDate = (month) =>{
        if([1,3,5,7,8,10,12].includes(month))
            setDate({...date, month, maxDate: 31})
        else if([4,6,9,11].includes(month))
            setDate({...date, month, maxDate: 30})
        else if(month === 2)
            setDate({...date, month, maxDate: 28})
    }
    useEffect(()=>{
        setMaxDate()
        dataHandler.setData({...dataHandler.data, dob: datepicked})

    },[date])

    return (
        <div className='d-flex my-5 my-fsz-1'>
            <div className='d-flex align-items-end'>
                <div className="align-items-center"><h4>DOB</h4></div>
            </div>
            <div className="mx-3 col-sm-3">
                <label>Year</label>
                <select onChange={(e) => setDate({...date, year: e.target.value})} className="mx-2 form-select-lg form-select" aria-label="Default select example">
                    {years.map(year =>
                        <option selected={year === currentYear ? true : false} value={year}>{year}</option>
                    )}
                </select>

            </div>
            <div className="mx-3 col-sm-3">
                <label>Month</label>
                <select 
                    onChange={(e) =>{
                        setMaxDate(+e.target.value)
                    }} 
                    className="mx-2 form-select-lg form-select" 
                    aria-label="Default select example">
                   {months.map(month => 
                    <option selected={month === currentMonth ? true : false} value={month}>{month}</option>
                   )}
                </select>
            </div>
            <div className="mx-3 col-sm-3">
                <label>Date</label>
                <select onChange={(e) => setDate({...date, day: e.target.value})} className="mx-2 form-select-lg form-select" aria-label="Default select example">
                   {days.map(day => 
                    <option selected={day === currentDay ? true : false} value={day}>{day}</option>
                   )}
                </select>
            </div>
        </div>
    )
}

export default DatePicker