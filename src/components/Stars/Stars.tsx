import { Star } from "../Star";

import "./Stars.css";

type Props = {
  count: number;
};

export const Stars = (props: Props) => {
  if (props.count < 1 || props.count > 5 || !Number.isInteger(props.count)) {
    return null;
  }
  return (
    <ul className="card-body-stars u-clearfix">
      {Array.from(Array(props.count), (e, i) => {
        return (
          <li key={i}>
            <Star />
          </li>
        );
      })}
    </ul>
  );
};
