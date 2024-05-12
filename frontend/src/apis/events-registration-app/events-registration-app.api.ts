import axios from 'axios'
import ApiRoutes from './enums/api-routes.enum';
import ApiUrl from '../../common/enums/api-url.enum';
import Participant from '../../common/types/participant.type';
import EventsSort from './enums/events-sort.enum';

class EventsRegistrationAppApi {
    url: string;

    constructor(url: string) {
        this.url = url;
    }

    async getPaginatedEvents(eventsPerPage: number, page: number, sort: EventsSort) {
        const response = await axios.get(`${this.url}${ApiRoutes.EVENT}`, {
            params: {
                page,
                eventsPerPage,
                sort
            },
        });
        
        return response.data;
    }

    async getEvent(id: string) {
        const response = await axios.get(`${this.url}${ApiRoutes.EVENT_ID(id)}`);
        
        return response.data;
    }

    async registerParticipant(eventId: number, participant: Omit<Participant, 'id' | 'event'>) {
        const response = await axios.post(
            `${this.url}${ApiRoutes.REGISTER_PARTICIPANT(String(eventId))}`, 
            JSON.stringify(participant),
        {
            headers: {
                'Content-Type': 'application/json'
                }
        });
        
        return response.data;
    }
}

export default new EventsRegistrationAppApi(ApiUrl.EventsRegistrationAppApiURL);