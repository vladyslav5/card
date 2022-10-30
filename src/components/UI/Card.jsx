import styles from "./Card.module.scss"

const Card = ({imgSrc, title, text, backText}) => {
    return (
        <div className={styles["card-wrapper"]}>
            <div>
                <div className={styles["font-side"]}>
                    <img src={imgSrc}/>
                    <h1>{title}</h1>
                    {text}
                </div>
                <div className={styles["back-side"]}>
                    {backText}
                </div>
            </div>
        </div>
    );
};

export default Card;