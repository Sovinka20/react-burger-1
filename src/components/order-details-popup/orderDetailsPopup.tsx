import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-details-popup.module.css";

type TOrderDetailsPopupProps = {
  feedOrderData: {
    number: string;
    name: string;
    status: string;
    createdAt: string;
    generalPriceList: string;
    ingredientsData: [
      {
        _id: string;
        type: string;
        image_large: string;
        image_mobail: string;
        image: string;
        name: string;
        calories: number;
        proteins: number;
        fat: number;
        carbohydrates: number;
        price: number;
        numberOfComponents: number;
      }
    ];
  };
};

const OrderDetailsPopup: React.FC<TOrderDetailsPopupProps> = ({
  feedOrderData,
}) => {
  console.log(feedOrderData);
  if (!feedOrderData) {
    return <h1>Загрузка...</h1>;
  }
  return (
    <div className={styles.orderContainer}>
      <h3 className="text text_type_digits-default mb-10">{`#${feedOrderData.number}`}</h3>
      <h2 className="text text_type_main-medium mb-3">{feedOrderData.name}</h2>
      <h4
        className={
          feedOrderData.status === "done"
            ? `${styles.titleColor} text text_type_main-default mb-15`
            : ""
        }
      >
        {feedOrderData.status === "done" ? "Выполнен" : "Готовится"}
      </h4>
      <h5 className="text text_type_main-medium mb-6">Состав:</h5>
      <ul className={`${styles.ingredients} custom-scroll`}>
        {feedOrderData.ingredientsData.map((item) => {
          return (
            <li className={styles.ingredient} key={item._id}>
              <div className={styles.ingredientContainer}>
                <div
                  style={{ backgroundImage: `url(${item.image})` }}
                  className={styles.img}
                ></div>
                <span className="text text_type_main-default">{item.name}</span>
              </div>

              <span className="text text_type_digits-default">
                {item.numberOfComponents} x {item.price}
              </span>
            </li>
          );
        })}
      </ul>
      <div className={styles.priceContainer}>
        <span className="text text_type_main-default text_color_inactive">
          {<FormattedDate date={new Date(feedOrderData.createdAt)} />}
        </span>
        <div className={styles.price}>
          <CurrencyIcon type={"secondary"} />
          <span className={`text text_type_digits-default ml-2`}>
            {feedOrderData.generalPriceList}
          </span>
        </div>
      </div>
    </div>
  );
};

export { OrderDetailsPopup };
