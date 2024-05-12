import { useCallback, useContext, useEffect, useState } from "react";
import EventBoardCard from "./components/event-board-card/event-board-card";
import styles from './styles.module.scss'
import EventContext from "../../common/contexts/events.context";
import eventsRegistrationAppApi from "../../apis/events-registration-app/events-registration-app.api";
import { EventsPerPage } from "./constants/event-board.constants";
import EventsSort from "../../apis/events-registration-app/enums/events-sort.enum";

function EventsBoardPage() {
    const { events, setEvents } = useContext(EventContext);
    const [page, setPage] = useState<number>(0);
    const [sort, setSort] = useState<EventsSort>(EventsSort.Title);

    const increasePage = useCallback(() => {
        setPage((p) => p+1);
    }, []);

    const decreasePage = useCallback(() => {
        setPage((p) => p-1);
    }, []);

    const handleSourceChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const eventsSort = e.target.value as EventsSort;
        setSort(eventsSort);
    }, []);

    useEffect(() => {
        (async function() {
            const responseEvents = await eventsRegistrationAppApi.getPaginatedEvents(EventsPerPage, page, sort);
            setEvents(responseEvents);
        }());
    }, [page, sort, setEvents]);
    

    return <div className={styles.events_board__page_container}>
        <h1>
            Events
        </h1>
        
        <p>Sort By</p>
        <input defaultChecked type="radio" id={styles.radio_buttons__social_title} name="sort" value={EventsSort.Title} onChange={handleSourceChange} />
        <label htmlFor={styles.radio_buttons__social_title}>{EventsSort.Title}</label>
        <input type="radio" id={styles.radio_buttons__date} name="sort" value={EventsSort.EventDate} onChange={handleSourceChange} />
        <label htmlFor={styles.radio_buttons__date}>{EventsSort.EventDate}</label>
        <input type="radio" id={styles.radio_buttons__organizer} name="sort" value={EventsSort.Organizer} onChange={handleSourceChange} />
        <label htmlFor={styles.radio_buttons__organizer}>{EventsSort.Organizer}</label>

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
