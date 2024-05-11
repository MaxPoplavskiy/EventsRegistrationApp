import styles from './styles.module.scss';

type Properties = {
    title: string,
    description: string,
}

function EventBoardCard({
    title,
    description,
    }: Properties) {
    return <article className={styles.event_card__container}>
        <h2>
            {title}
        </h2>
        <p>
            {description}
        </p>

        <div className={styles.event_card__lower_body}>
            <p>
                Register
            </p>
            <p>
                View
            </p>
        </div>
    </article>
}

export default EventBoardCard;
