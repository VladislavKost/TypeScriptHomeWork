import { TItem, Item } from "../Item";

import "./Listing.css";

type TItems = {
  items: TItem[];
};

export const Listing = (props: TItems) => {
  return (
    <div className="item-list">
      {props.items.map((item) => {
        return <Item key={item.listing_id} {...item} />;
      })}
    </div>
  );
};
