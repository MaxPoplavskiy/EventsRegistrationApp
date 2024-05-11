import EventBoardCard from "./components/event-board-card/event-board-card";
import styles from './styles.module.scss'

function EventsBoardPage() {
    return <div className={styles.events_board__page_container}>
        <h1>
            Events
        </h1>
        
        <main className={styles.events_board__container}>
            <EventBoardCard title="123" description="123" />
            <EventBoardCard title="123" description="123" />
            <EventBoardCard title="123" description="123" />
            <EventBoardCard title="123" description="123" />
            <EventBoardCard title="123" description="123" />
            <EventBoardCard title="123" description="123" />
        </main>
    </div>;
}

export default EventsBoardPage;
