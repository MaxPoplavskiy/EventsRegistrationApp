import { createContext } from "react";
import Event from "../types/event.type";

type ContextValue = {
    events: Event[];
    setEvents: (events: React.SetStateAction<Event[]>) => void;
}

const EventContext = createContext<ContextValue>({
    events: [], 
    setEvents: () => {}
});

export default EventContext;