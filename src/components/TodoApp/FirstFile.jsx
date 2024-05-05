import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import SecondFile from "./SecondFile";
import styles from "./todo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import { type } from "@testing-library/user-event/dist/type";
// import src from "../index.css";
// import { type } from "../Code/Code";
let output = [
  {
    id: Date.now(),
    task: "name",
    complete: false,
  },
];
function reduer(value, action) {
  switch (action.type) {
    case "Add":
      return [
        ...value,
        {
          id: Date.now(),
          task: action.payload,
          complete: false,
        },
      ];
    case "DELETELIST":
      const list = value.filter((value) => {
        return value.id !== action.payload;
      });
      return list;
    case "UPDATELIST":
      const update = value.map((value) => {
        if (value.id === action.payload) {
          return { ...value, complete: !value.complete };
        }
        return value;
      });
      return update;
    case "REMOVELIST":
      return action.payload;
  }
}
// export function context() {
//   const value = useContext(PropsData);
//   return value;
// }
export const PropsData = createContext();
function FirstFile() {
  const [data, dispecth] = useReducer(reduer, output);
  const [input, setInput] = useState("Data");
  const [dark, setDark] = useState(false);
  const [show, setShow] = useState(true);

  function change(e) {
    setInput(e.target.value);
  }
  function click() {
    dispecth({ type: "Add", payload: input });
    setInput("");
  }
  function tarnari() {
    setShow(false);
  }
  function number(value) {
    setInput(value.task);
  }
  function removeList(value) {
    dispecth({ type: "DELETELIST", payload: value.id });
  }
  function removeAll() {
    dispecth({ type: "REMOVELIST", payload: [] });
  }
  function updateList(id) {
    dispecth({ type: "UPDATELIST", payload: id });
  }
  // function update() {
  //   dispecth({ type: "UPDATE", payload: complete });
  // }
  console.log("");
  return (
    <PropsData.Provider value={input}>
      <div className={dark ? "darkMode" : "ligthMode"}>
        <SecondFile />
        <div className="swich">
          <div className={styles.dark}>
            {dark ? (
              <button
                style={{
                  color: "black",
                  backgroundColor: "white",
                  fontWeight: "600",
                }}
                className={styles.dark}
                onClick={() => setDark(!dark)}
              >
                Ligth Mode
              </button>
            ) : (
              <button
                style={{
                  color: "white",
                  backgroundColor: "black",
                  fontWeight: "600",
                }}
                className={styles.dark}
                onClick={() => setDark(!dark)}
              >
                Dark Mode
              </button>
            )}
          </div>
        </div>

        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/to-do-list-4727272-3928189.png"
          alt=""
        />
        <div className={styles.two}>
          <div className={styles.fristPage}>
            <div className={styles.font}>
              Search <br />
              & <br />
              Add Data
            </div>

            <div className={styles.input}>
              <span>Search</span>
              <input onChange={change} value={input} type="text" />
              <div onClick={click}>
                <button>Click and Add List</button>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.icon}>
              <button onClick={tarnari} className={styles.view}>
                <FontAwesomeIcon className={styles.ico} icon={faArrowRight} />
                <span> Click & View A List</span>
              </button>
            </div>
            {show ? (
              ""
            ) : (
              <ul>
                {data.map((value, index) => {
                  return (
                    <li key={index}>
                      <input
                        checked={value.complete}
                        onChange={() => updateList(value.id)}
                        className={styles.update}
                        type="checkbox"
                      />

                      <p onClick={() => number(value)}>{value.task}</p>

                      <button
                        onClick={() => removeList(value)}
                        className={styles.deletebtn}
                      >
                        <FontAwesomeIcon
                          className={styles.deleteIcon}
                          icon={faTrash}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
            <div className={styles.allLIst}>
              <button onClick={removeAll} className="button">
                Remove All
              </button>
            </div>

            {/* <ul>
            {data.map((value, index) => {
              return (
                <i key={index}>
                  <p>{value.task}</p>
                </i>
              );
            })}
          </ul> */}
          </div>
        </div>
      </div>
    </PropsData.Provider>
  );
}

export default FirstFile;
