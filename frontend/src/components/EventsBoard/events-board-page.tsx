import { useContext, useEffect } from "react";
import EventBoardCard from "./components/event-board-card/event-board-card";
import styles from './styles.module.scss'
import EventContext from "../../common/contexts/events.context";
import eventsRegistrationAppApi from "../../apis/events-registration-app/events-registration-app.api";

function EventsBoardPage() {
    const { events, setEvents } = useContext(EventContext);

    useEffect(() => {
        (async function() {
            const responseEvents = await eventsRegistrationAppApi.getPaginatedEvents(16, 0);
            setEvents(responseEvents);
        }());
    }, [setEvents]);

    return <div className={styles.events_board__page_container}>
        <h1>
            Events
        </h1>
        
        <main className={styles.events_board__container}>
            {events.map((event) => <EventBoardCard title={event.title} description={event.description} />)}
        </main>
    </div>;
}

export default EventsBoardPage;
