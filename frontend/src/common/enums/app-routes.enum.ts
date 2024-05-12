const AppRoutes = {
    ROOT: '/',
    EVENT_REGISTRATION: (eventId: string = ':id') => `/event/${eventId}/registration`,
    EVENT_ID: (eventId: string = ':id') => `/event/${eventId}`,
} as const;

export default AppRoutes;