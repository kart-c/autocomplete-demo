import React, { useRef, useState } from "react";

import { ListItem } from "../../common/types";
import { difference } from "../../common/utils";
import Chip from "../Chip/Chip";
import styles from "./autocomplete.module.css";

export default function Autocomplete({
  defaultList,
}: {
  defaultList: ListItem[];
}) {
  const [input, setInput] = useState("");
  const [chips, setChips] = useState<ListItem[]>([]);
  const [list, setList] = useState<ListItem[]>(defaultList);
  const [focusedElement, setFocusedElement] = useState<Element | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);
  const chipsRef = useRef<HTMLDivElement | null>(null);

  const focusInput = () => inputRef.current?.focus();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const filteredList = difference(defaultList, chips, "_id");
    setInput(value);
    if (!value) {
      setList(filteredList);
      return;
    }
    const list2 = filteredList.filter(
      (item) =>
        item.fullName.toLowerCase().includes(value.toLowerCase()) ||
        item.email.toLowerCase().includes(value.toLowerCase())
    );
    setList(list2);
    setFocusedElement(e.target);
  };

  const onItemClick = (e: React.SyntheticEvent) => {
    const { dataset } = e.target as HTMLUListElement;
    const { id } = dataset;
    addChip(id);
  };

  const addChip = (id: string | undefined) => {
    if (!id) {
      return;
    }
    const chip = list.find((item) => item._id === id);
    if (!chip) {
      return;
    }
    setChips((prev) => [...prev, chip]);
    setList((prev) => prev.filter((item) => item._id !== chip._id));
    setInput("");
    inputRef.current?.focus();
  };

  const onContainerClick = (e: React.SyntheticEvent) => {
    if ((e.target as HTMLDivElement).dataset.id !== "combobox") {
      return;
    }
    focusInput();
    setFocusedElement(e.target as HTMLDivElement);
  };

  const onBackSpace = () => {
    const value = inputRef.current?.value;
    if (value) {
      return;
    }
    const lastChip = chipsRef.current?.lastElementChild as HTMLDivElement;
    if (!lastChip) {
      return;
    }
    const nodeToRemove = lastChip.isEqualNode(focusedElement);
    if (!nodeToRemove) {
      lastChip.focus();
      setFocusedElement(lastChip);
    } else {
      removeChip(lastChip.dataset.id ?? "");
    }
  };

  const focusOnList = (direction: "up" | "down") => {
    const listElements = Array.from(listRef.current?.children || []);
    if (!listElements) {
      return;
    }

    const currentFocusedListItem = listElements.find((element) =>
      element.isEqualNode(focusedElement)
    );

    let focusedElementIndex = -1;

    if (currentFocusedListItem) {
      focusedElementIndex = listElements.findIndex((element) =>
        element.isEqualNode(currentFocusedListItem)
      );
    }

    let elementToFocus: Element | null = null;

    if (direction === "up") {
      if (focusedElementIndex <= 0) {
        setFocusedElement(inputRef.current);
        focusInput();
        return;
      }
      elementToFocus = listElements[focusedElementIndex - 1];
    } else {
      if (focusedElementIndex === listElements.length - 1) {
        return;
      }
      elementToFocus = listElements[focusedElementIndex + 1];
    }
    (elementToFocus as HTMLLIElement).focus();
    setFocusedElement(elementToFocus);
  };

  const addFocusedListItem = () => {
    const listElements = Array.from(listRef.current?.children || []);
    if (!listElements) {
      return;
    }

    const currentFocusedListItem = listElements.find((element) =>
      element.isEqualNode(focusedElement)
    );

    if (currentFocusedListItem) {
      addChip((currentFocusedListItem as HTMLLIElement).dataset.id);
    }
  };

  const onKeyUp = (e: React.KeyboardEvent) => {
    switch (e.code) {
      case "Backspace":
        onBackSpace();
        break;
      case "ArrowUp":
        focusOnList("up");
        break;
      case "ArrowDown":
        focusOnList("down");
        break;

      case "Enter":
        addFocusedListItem();
        break;

      default:
        break;
    }
  };

  const removeChip = (_id: string) => {
    const filteredChips = chips.filter((chip) => chip._id !== _id);
    setChips(filteredChips);
    setList(difference(defaultList, filteredChips, "_id"));
    focusInput();
  };

  return (
    <div
      className={styles.container}
      onClick={onContainerClick}
      data-id="combobox"
    >
      <div ref={chipsRef} className={styles.chipsContainer} onKeyUp={onKeyUp}>
        {chips.map(({ _id, fullName }) => (
          <Chip
            key={_id}
            _id={_id}
            fullName={fullName}
            removeChip={removeChip}
          />
        ))}
      </div>
      <div className={styles.inputContainer} onKeyUp={onKeyUp}>
        <input
          type="text"
          className={styles.input}
          value={input}
          placeholder="Add new user..."
          onChange={onInputChange}
          ref={inputRef}
        />
        {focusedElement && list.length > 0 ? (
          <ul className={styles.list} onClick={onItemClick} ref={listRef}>
            {list.map(({ _id, avatar, fullName, email }) => (
              <li
                key={_id}
                className={styles.listItem}
                data-id={_id}
                tabIndex={0}
              >
                <img
                  src={avatar}
                  alt={fullName}
                  className={styles.avatar}
                  data-id={_id}
                />
                <div className={styles.userInfo} data-id={_id}>
                  <span className={styles.name} data-id={_id}>
                    {fullName}
                  </span>
                  <span className={styles.email} data-id={_id}>
                    {email}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
