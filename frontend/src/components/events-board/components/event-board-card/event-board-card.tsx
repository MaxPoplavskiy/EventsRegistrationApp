import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import AppRoutes from '../../../../common/enums/app-routes.enum';

type Properties = {
    id: string,
    title: string,
    description: string,
}

function EventBoardCard({
    id,
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
            <Link to={AppRoutes.EVENT_REGISTRATION(id)}>
                Register
            </Link>
            <Link to={AppRoutes.EVENT_ID(id)}>
                View
            </Link>
        </div>
    </article>
}

export default EventBoardCard;
