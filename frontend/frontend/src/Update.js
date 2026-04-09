import { useState } from "react";
import axios from "axios";

function Update() {
  const [form, setForm] = useState({});
  const [msg, setMsg] = useState("");

  const update = async () => {
    if (!form.bookingId || !form.memberId) {
      setMsg("Booking ID & Member ID required");
      return;
    }

    try {
      const res = await axios.put("http://localhost:5000/api/bookings/update", form);
      setMsg(res.data.message);
    } catch (err) {
      setMsg(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="card">
      <h3>Update Booking</h3>

      <input placeholder="Booking ID"
        onChange={e => setForm({ ...form, bookingId: e.target.value })} />

      <input placeholder="Member ID"
        onChange={e => setForm({ ...form, memberId: e.target.value })} />

        <select
  onChange={e => setForm({ ...form, seatType: e.target.value })}
>
  <option value="">Select Seat Type</option>
  <option value="Window">Window</option>
  <option value="Cabin">Cabin</option>
  <option value="Open Desk">Open Desk</option>
  <option value="Meeting Room">Meeting Room</option>
</select>

      <input placeholder="Duration"
        onChange={e => setForm({ ...form, duration: e.target.value })} />

      <button onClick={update}>Update</button>

      {msg && (
        <p className={msg.includes("success") ? "success" : "error"}>
          {msg}
        </p>
      )}
    </div>
  );
}

export default Update;