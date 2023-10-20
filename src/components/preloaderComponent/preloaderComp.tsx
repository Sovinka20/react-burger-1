import styles from "./preloaderComp.module.css";

const PreloaderComponent = () => {
  return (
    <section className={styles.container}>
      <span className={`${styles.sendUser} text text_type_main-medium mb-15`}>
        Загрузка...
      </span>
    </section>
  );
};

export default PreloaderComponent;
