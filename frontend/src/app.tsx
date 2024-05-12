import { Route, Routes } from "react-router-dom";
import AppRoutes from "./common/enums/app-routes.enum";
import { useState } from "react";
import Event from "./common/types/event.type";
import EventContext from "./common/contexts/events.context";
import EventRegistrationPage from "./components/event-registration/event-registration.";
import EventsBoardPage from "./components/events-board/events-board-page";
import EventsViewPage from "./components/event-view/event-view";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';


function App() {
    const [events, setEvents] = useState<Event[]>([]);

    return  <EventContext.Provider value={{events, setEvents}}>
        <Routes>
            <Route path={AppRoutes.ROOT} element={<EventsBoardPage />}></Route>
            <Route path={AppRoutes.EVENT_REGISTRATION()} element={<EventRegistrationPage />}></Route>
            <Route path={AppRoutes.EVENT_ID()} element={<EventsViewPage />}></Route>
        </Routes>
        <ToastContainer />
    </EventContext.Provider>;
}

export default App;