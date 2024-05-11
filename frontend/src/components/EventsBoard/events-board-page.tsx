import EventBoardCard from "./components/event-board-card/event-board-card";
import styles from './styles.module.scss'

function EventsBoardPage() {
    return <>
        <h1>
            Events
        </h1>
        
        <main className={styles.events_board_container}>
            <EventBoardCard title="123" description="123" />
            <EventBoardCard title="123" description="123" />
            <EventBoardCard title="123" description="123" />
            <EventBoardCard title="123" description="123" />
            <EventBoardCard title="123" description="123" />
            <EventBoardCard title="123" description="123" />
        </main>
    </>;
}

export default EventsBoardPage;
