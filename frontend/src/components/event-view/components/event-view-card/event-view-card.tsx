import styles from './styles.module.scss'

type Properties = {
    fullName: string,
    email: string
}

function EventViewCard({
    fullName,
    email
}: Properties) {
    return <article className={styles.event_view_card__container}>
        <p>
            {fullName}
        </p>
        <p>
            {email}
        </p>
    </article>;
}

export default EventViewCard;
