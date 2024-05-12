import { useCallback, useState } from 'react';
import styles from './styles.module.scss';
import Participant, { ParticipantSource } from '../../common/types/participant.type';
import eventsRegistrationAppApi from '../../apis/events-registration-app/events-registration-app.api';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

function EventRegistrationPage() {
    const { id: eventId } = useParams();

    const [data, setData] = useState<Omit<Participant, 'id' | 'event'>>({
        fullName: "",
        email: "",
        dateOfBirth: "",
        source: ParticipantSource.SocialMedia
    });

    const updateData = useCallback((updatedProperty: Partial<Participant>) => {
        setData((d) => ({...d, ...updatedProperty}));
    }, []);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        updateData({ [name]: value });
    }, [updateData]);

    const handleSourceChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const sourceValue = e.target.value as ParticipantSource;
        updateData({ source: sourceValue });
    }, [updateData]);

    const registerParticipant = useCallback(() => {
        eventsRegistrationAppApi.registerParticipant(Number(eventId), data)
        .catch((error: AxiosError) => {
            for(const message of (error.response?.data as { message: string[] }).message) {
                toast.error(message);
            }
        })
    }, [eventId, data]);

    return <main className={styles.registration_page__container}>
        <h1>
            Event registration
        </h1>

        <p>
            Full name
        </p>
        <input name="fullName" onChange={handleInputChange} />

        <p>
            Email
        </p>
        <input name="email" onChange={handleInputChange} />

        <p>
            Date of Birth
        </p>
        <input type="date" name="dateOfBirth" onChange={handleInputChange} />

        <p>
            Where did you hear about this event?
        </p>
        <input type="radio" id={styles.radio_buttons__social_media} name="source" value={ParticipantSource.SocialMedia} onChange={handleSourceChange} />
        <label htmlFor={styles.radio_buttons__social_media}>Social media</label>
        <input type="radio" id={styles.radio_buttons__friends} name="source" value={ParticipantSource.Friends} onChange={handleSourceChange} />
        <label htmlFor={styles.radio_buttons__friends}>Friends</label>
        <input type="radio" id={styles.radio_buttons__myself} name="source" value={ParticipantSource.FoundMyself} onChange={handleSourceChange} />
        <label htmlFor={styles.radio_buttons__myself}>Found myself</label>

        <div>
            <button className={styles.register__button} onClick={registerParticipant}>Register</button>
        </div>

        
    </main>;
}

export default EventRegistrationPage;
