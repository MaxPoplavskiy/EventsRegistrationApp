import { useCallback, useContext, useEffect, useState } from "react";
import EventBoardCard from "./components/event-board-card/event-board-card";
import styles from './styles.module.scss'
import EventContext from "../../common/contexts/events.context";
import eventsRegistrationAppApi from "../../apis/events-registration-app/events-registration-app.api";
import { EventsPerPage } from "./constants/event-board.constants";

function EventsBoardPage() {
    const { events, setEvents } = useContext(EventContext);
    const [page, setPage] = useState<number>(0);

    const increasePage = useCallback(() => {
        setPage((p) => p+1);
    }, []);

    const decreasePage = useCallback(() => {
        setPage((p) => p-1);
    }, []);

    useEffect(() => {
        (async function() {
            const responseEvents = await eventsRegistrationAppApi.getPaginatedEvents(EventsPerPage, page);
            setEvents(responseEvents);
        }());
    }, [page, setEvents]);

    return <div className={styles.events_board__page_container}>
        <h1>
            Events
        </h1>
        
        <main className={styles.events_board__container}>
            {events.map((event) => <EventBoardCard id={String(event.id)} title={event.title} description={event.description} />)}
        </main>

        <aside className={styles.events_board__page_counter}>
            <button disabled={page <= 0} onClick={decreasePage}>
                &lt;
            </button>
            <p>
                {page}
            </p>
            <button disabled={events.length < EventsPerPage} onClick={increasePage}>
                &gt;
            </button>
        </aside>
    </div>;
}

export default EventsBoardPage;
