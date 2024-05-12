import { useParams } from 'react-router-dom';
import styles from './styles.module.scss'
import Event from '../../common/types/event.type';
import { useCallback, useEffect, useState } from 'react';
import eventsRegistrationAppApi from '../../apis/events-registration-app/events-registration-app.api';
import EventViewCard from './components/event-view-card/event-view-card';
import Participant from '../../common/types/participant.type';


function EventsViewPage() {
    const { id: eventId } = useParams();

    const [event, setEvent] = useState<Event | null>(null);

    const [{ email, fullName }, setSearchParams] = useState<Pick<Participant, 'fullName' | 'email'>>({
        fullName: '',
        email: ''
    });

    useEffect(() => {
        (async function() {
            if(eventId) {
                setEvent(await eventsRegistrationAppApi.getEvent(eventId));
            }
        })();
    }, [eventId]);

    const filterParticipant = useCallback((participant: Participant) => {
        const fullNameMatch = participant.fullName.toLowerCase().includes(fullName.toLowerCase());
        const emailMatch = participant.email.toLowerCase().includes(email.toLowerCase());
        return fullNameMatch && emailMatch;
    }, [email, fullName]);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSearchParams((s) => ({ ...s, [name]: value }));
    }, [setSearchParams]);

    return <div className={styles.events_view__page_container}>
        <h1>
            {event?.title} participants
        </h1>

        <input onChange={handleInputChange} name='fullName' className={styles.events_view__input} placeholder='full name'></input>
        <input onChange={handleInputChange} name='email' className={styles.events_view__input} placeholder='email'></input>
        
        <main className={styles.events_view__container}>
            {event?.participants?.filter(filterParticipant).map((participant) => <EventViewCard email={participant.email} fullName={participant.fullName} />)}
        </main>     
    </div>;
}

export default EventsViewPage;
