import React from "react";
import style from "./table.module.css";

export default function Table(props) {
  //   console.log(props.peoples);
  return (
    <>
      <table className={style.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th style={{ width: "200px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.peoples ? (
            props.peoples.map((el, i) => {
              return (
                <tr className={style.tr} key={i}>
                  <td>{el.name}</td>
                  <td style={{ textAlign: "center" }}>
                    <button onClick={() => props.del(i)} className={style.delBtn}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr> Please Add...</tr>
          )}
        </tbody>
      </table>
    </>
  );
}
