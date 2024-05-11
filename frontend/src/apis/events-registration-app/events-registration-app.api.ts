import axios from 'axios'
import ApiRoutes from './api-routes.enum';
import ApiUrl from '../../common/enums/api-url.enum';

class EventsRegistrationAppApi {
    url: string;

    constructor(url: string) {
        this.url = url;
    }

    async getPaginatedEvents(eventsPerPage: number, page: number) {
        const response = await axios.get(`${this.url}${ApiRoutes.EVENT}`, {
            params: {
                page,
                eventsPerPage
            },
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
        });
        
        return response.data;
    }
}

export default new EventsRegistrationAppApi(ApiUrl.EventsRegistrationAppApiURL);