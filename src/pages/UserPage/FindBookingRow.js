const FindBookingRow = ({ bookings, onCancel, showCancel = true, showExtra = false }) => {
  return bookings.map((b, index) => {
    const checkInDate = b.checkIn ? new Date(b.checkIn) : null;
    const checkOutDate = b.checkOut ? new Date(b.checkOut) : null;

    const nights =
      checkInDate && checkOutDate
        ? (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)
        : 0;

    const total = b.price && nights ? nights * b.price : 0;

    return (
      <tr key={index}>
        <td>{b.id}</td>

        {showExtra && <td>{b.name || "-"}</td>}

        <td>{b.roomName || "-"}</td>
        <td>{b.roomType || "-"}</td>
        <td>{b.checkIn || "-"}</td>
        <td>{b.checkOut || "-"}</td>

        {showExtra && <td>{nights || "-"}</td>}
        {showExtra && <td>₨ {b.price || 0}</td>}
        {showExtra && <td>₨ {total.toLocaleString()}</td>}

        <td>
          <span className={`status ${b.bookingStatus}`}>
            {b.bookingStatus}
          </span>
        </td>

        {showCancel && b.bookingStatus === "pending" && (
          <td>
            <button onClick={() => onCancel(b.id)}>Cancel</button>
          </td>
        )}
        
      </tr>
    );
  });
};

export default FindBookingRow;
