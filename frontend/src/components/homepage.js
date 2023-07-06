import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";

export default function HomePage() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<p>This is boe page</p>} />
        <Route path="/join" Component={RoomJoinPage}></Route>
        <Route path="/create" Component={CreateRoomPage}></Route>
      </Routes>
    </Router>
  );
}
