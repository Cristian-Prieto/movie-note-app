import { format } from "date-fns";
import { useState } from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
import { getTypeColor } from "../utils/utils";
import { Button } from "./Button";
import styles from "./Item.module.css";

export function Item({ item, deleteNote }) {
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
            item.rating > rating ? (
              <BsStarFill key={rating} />
            ) : (
              <BsStar key={rating} />
            )
          )}
        </div>
        <div className={styles.comment}>{item.comment}</div>
        <div className={styles.added}>
          {format(item.createdAt, "dd/MM/yyyy")}
        </div>
        <div className={styles.more}>
          <Button
            classes={styles.moreButton}
            onClick={() => setShowMovileDetails((prev) => !prev)}
          >
            {showMobileDetails ? "LESS" : "MORE"}
          </Button>
        </div>
        <div className={styles.delete}>
          <Button
            onClick={() => deleteNote(item)}
            classes={styles.deleteButton}
          >
            x
          </Button>
        </div>
      </li>
      {showMobileDetails && (
        <div
          className={styles.detail}
          style={{
            backgroundColor: getTypeColor(item.type),
            color: "white",
          }}
        >
          {item.comment}
          <span className={styles.detailDate}>
            {format(item.createdAt, "dd/MM/yyyy")}
          </span>
        </div>
      )}
    </>
  );
}
