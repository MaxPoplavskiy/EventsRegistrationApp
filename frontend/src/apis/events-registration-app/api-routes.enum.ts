const ApiRoutes = {
    ROOT: '/',
    EVENT: '/event',
    EVENT_ID: (id: string = ':id') => `/event/${id}`,
    REGISTER_PARTICIPANT: (id: string = ':id') => `/event/${id}/register`
} as const;

export default ApiRoutes;