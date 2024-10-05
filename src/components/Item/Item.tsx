import "./Item.css";

export type TItem = {
  listing_id: number;
  url: string;
  MainImage: {
    listing_image_id: number;
    listing_id: number;
    url_75x75: string;
    url_170x135: string;
    url_570xN: string;
    url_fullxfull: string;
  };
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
};

export const Item = (props: TItem) => {
  return (
    <div className="item">
      <div className="item-image">
        <a href={props.url}>
          <img
            src={
              props.MainImage
                ? props.MainImage.url_570xN
                : "https://static.tildacdn.com/stor3838-6463-4163-a435-323930356262/92037664.png"
            }
          />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{props.title}</p>
        <p className="item-price">{`${
          props.currency_code === "USD"
            ? "$"
            : props.currency_code === "EUR"
            ? "€"
            : props.currency_code
        } ${props.price}`}</p>
        <p
          className={`item-quantity level-${
            props.quantity < 10
              ? "low"
              : props.quantity < 20
              ? "medium"
              : "high"
          }`}
        >{`${props.quantity} left`}</p>
      </div>
    </div>
  );
};
