const AppRoutes = {
    ROOT: '/',
    EVENT_REGISTRATION: (eventId: string = ':id') => `event/${eventId}/registration`
} as const;

export default AppRoutes;