
const FindBookingRow = (props)=>{
    return props.bookings.map(
        (b,index)=>{
            return(
                <tr key={index}>
                  <td>{b.id}</td>
                  <td>{b.roomName}</td>
                  <td>{b.roomType}</td>
                  <td>{b.checkIn}</td>
                  <td>{b.checkOut}</td>
                  <td>
                    <span className={`status ${b.status}`}>
                      {b.bookingStatus}
                    </span>
                  </td>
                  <td> <button>Cancel</button></td>
                </tr>
            )
        }
    )
}

export default FindBookingRow