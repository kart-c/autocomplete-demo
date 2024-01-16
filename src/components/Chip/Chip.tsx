import { ListItem } from "../../common/types";
import styles from "./chip.module.css";

export default function Chip({
  fullName,
  _id,
  removeChip,
}: Pick<ListItem, "_id" | "fullName"> & {
  removeChip: (_id: string) => void;
}) {
  return (
    <div className={styles.chip} tabIndex={0} data-id={_id}>
      <span>{fullName}</span>
      <span className={styles.removeBtn} onClick={() => removeChip(_id)}>
        X
      </span>
    </div>
  );
}
