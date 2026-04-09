import { useState } from "react";
import axios from "axios";

function Search() {
  const [bookingId, setBookingId] = useState("");
  const [memberId, setMemberId] = useState("");
  const [data, setData] = useState(null);
  const [msg, setMsg] = useState("");

  const search = async () => {
    if (!bookingId || !memberId) {
      setMsg("All fields required");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/bookings/search", {
        bookingId,
        memberId
      });

      setData(res.data);
      setMsg("");
    } catch (err) {
      setData(null);
      setMsg(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="card">
      <h3>Search Booking</h3>

      <input placeholder="Booking ID"
        onChange={e => setBookingId(e.target.value)} />

      <input placeholder="Member ID"
        onChange={e => setMemberId(e.target.value)} />

      <button onClick={search}>Search</button>

      {msg && <p className="error">{msg}</p>}

      {data && (
        <div>
          <p><b>Name:</b> {data.memberName}</p>
          <p><b>Status:</b> {data.status}</p>
          <p><b>Seat:</b> {data.seatType}</p>
          <p><b>Duration:</b> {data.duration}</p>
        </div>
      )}
    </div>
  );
}

export default Search;