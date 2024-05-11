import { createContext } from "react";
import Event from "../types/event";

type ContextValue = {
    events: Event[];
    setEvents: (events: Event[]) => void;
}

const EventContext = createContext<ContextValue>({
    events: [], 
    setEvents: () => {}
});

export default EventContext;