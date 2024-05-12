import { useParams } from 'react-router-dom';
import styles from './styles.module.scss'
import Event from '../../common/types/event.type';
import { useEffect, useState } from 'react';
import eventsRegistrationAppApi from '../../apis/events-registration-app/events-registration-app.api';
import EventViewCard from './components/event-view-card/event-view-card';

function EventsViewPage() {
    const { id: eventId } = useParams();

    const [event, setEvent] = useState<Event | null>(null);


    useEffect(() => {
        (async function() {
            if(eventId) {
                setEvent(await eventsRegistrationAppApi.getEvent(eventId));
            }
        })();
    }, [eventId]);

    useEffect(() => {
        console.log(event);
        
    }, [event])

    return <div className={styles.events_view__page_container}>
        <h1>
            {event?.title} participants
        </h1>
        
        <main className={styles.events_view__container}>
            {event?.participants?.map((participant) => <EventViewCard email={participant.email} fullName={participant.fullName} />)}
        </main>     
    </div>;
}

export default EventsViewPage;
