import { format } from "date-fns";
import { useState } from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
import { getTypeColor } from "../utils/utils";
import { Button } from "./Button";
import styles from "./Item.module.css";

export function Item({ item }) {
  const [showMobileDetails, setShowMovileDetails] = useState(false);

  return (
    <>
      <li key={item.id} className={styles.item}>
        <div
          style={{
            backgroundColor: getTypeColor(item.type),
          }}
          className={styles.type}
        />
        <div className={styles.title}>{item.title}</div>
        <div className={styles.rating}>
          {[0, 1, 2, 3, 4].map((rating) =>
            item.rating > rating ? <BsStarFill key={rating} /> : <BsStar key={rating} />
          )}
        </div>
        <div className={styles.comment}>{item.comment}</div>
        <div className={styles.added}>{format(item.createdAt, "dd/MM/yyyy")}</div>
        <div className={styles.more}>
          <Button classes={styles.moreButton} onClick={() => setShowMovileDetails((prev) => !prev)}>
            {showMobileDetails ? "LESS" : "MORE"}
          </Button>
        </div>
        <div className={styles.delete}>
          <Button classes={styles.deleteButton}>x</Button>
        </div>
      </li>
      {showMobileDetails && <div className={styles.item}>{item.comment}</div>}
    </>
  );
}
// export function Item({ item }) {
//   return (
//     <li key={item.id} className={styles.item}>
//       <div
//         style={{
//           borderLeft: `18px solid ${getTypeColor(item.type)}`,
//           width: 48,
//           minHeight: 45,
//           borderTopLeftRadius: "1rem",
//           borderBottomLeftRadius: "1rem",
//         }}
//         className={styles.title}
//       >
//         {item.title}
//       </div>
//       <div className={styles.rating}>
//         <div>
//           <BsStarFill />
//         </div>
//         <div>{item.rating >= 2 ? <BsStarFill /> : <BsStar />}</div>
//         <div>{item.rating >= 3 ? <BsStarFill /> : <BsStar />}</div>
//         <div>{item.rating >= 4 ? <BsStarFill /> : <BsStar />}</div>
//         <div>{item.rating === 5 ? <BsStarFill /> : <BsStar />} </div>
//       </div>
//       <div className={styles.comment}>{item.comment} </div>
//       <div className={styles.date}>{format(item.createdAt, "dd/MM/yyyy")}</div>
//       <Button classes={styles.delete}>x</Button>
//       {/* <div> / created at: {item.createdAt.toString()}</div> */}
//     </li>
//   );
// }
