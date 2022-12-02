import styles from "./Error.module.scss";
import Button from "../../components/Button";

const Error = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2>Error</h2>
        <p className={styles.text}>Sorry...couldn't find that page :( </p>
        <Button to="/" color="orange" className={styles.btn}>
          Back to home
        </Button>
      </div>
    </section>
  );
};

export default Error;
