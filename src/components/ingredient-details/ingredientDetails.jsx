import { ingridientPropType } from "../../data/propType";
import styles from "./ingredient-details.module.css";

const IngredientDetails = ({ data }) => {
  console.log(data);
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
  data: ingridientPropType,
};
/*
PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["bun", "sauce", "main"]).isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
}).isRequired;

https://ru.react.js.org/docs/typechecking-with-proptypes.html

Объект с определённой структорой

optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

*/

export default IngredientDetails;
