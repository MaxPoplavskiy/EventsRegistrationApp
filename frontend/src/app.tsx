import { Route, Routes } from "react-router-dom";
import AppRoutes from "./common/enums/app-routes.enum";
import EventsBoardPage from "./components/EventsBoard/events-board-page";
import { useState } from "react";
import Event from "./common/types/event";
import EventContext from "./common/contexts/events.context";


function App() {
    const [events, setEvents] = useState<Event[ ]>([]);

    return  <EventContext.Provider value={{events, setEvents}}>
        <Routes>
            <Route path={AppRoutes.ROOT} element={<EventsBoardPage />}></Route>
        </Routes>
    </EventContext.Provider> ;
}

export default App;