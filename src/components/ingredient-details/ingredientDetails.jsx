import PropTypes from "prop-types";
import styles from "./ingredient-details.module.css";

const IngredientDetails = ({ data }) => {
  return (
    <div className={styles.container}>
      <h3 className="text text_type_main-large mt-10 mb-4">
        Детали ингредиента
      </h3>
      <img src={data.image_large} alt={data.name} />
      <p className="mb-8 text text_type_main-medium">{data.name}</p>
      <div className={styles.detailContainer}>
        <div className={styles.didgitContainer}>
          <span className="text text_type_main-default text_color_inactive mb-2">
            Калории,ккал
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {data.calories}
          </span>
        </div>
        <div className={styles.didgitContainer}>
          <span className="text text_type_main-default text_color_inactive mb-2">
            Белки, г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {data.proteins}
          </span>
        </div>
        <div className={styles.didgitContainer}>
          <span className="text text_type_main-default text_color_inactive mb-2">
            Жиры, г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {data.fat}
          </span>
        </div>
        <div className={styles.didgitContainer}>
          <span className="text text_type_main-default text_color_inactive mb-2">
            Углеводы, г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {data.carbohydrates}
          </span>
        </div>
      </div>
    </div>
  );
};

IngredientDetails.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IngredientDetails;
