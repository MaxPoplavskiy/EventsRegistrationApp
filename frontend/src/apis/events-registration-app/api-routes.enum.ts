const ApiRoutes = {
    ROOT: '/',
    EVENT: '/event',
    REGISTER_PARTICIPANT: (id: string = ':id') => `/event/${id}/register`
} as const;

export default ApiRoutes;