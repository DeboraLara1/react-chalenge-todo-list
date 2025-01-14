import React from "react";
import styles from './Filters.module.css'
import  InputForm  from "../InputForm/InputForm";

export default function Filter({ filterText, setFilterText, setFilterStatus }: any ) {

  return (
    <div className={`mb-5  ${styles.filtro}`}>
        <div className={styles.inputSearch}>

      <InputForm
        placeholder="Pesquise uma tarefa"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        className="mt-0 w-[100%] "
        />
        </div>
      <select
        className="mt-30 p-2.5 border rounded-lg  w-[30%]"
        onChange={(e) => setFilterStatus(e.target.value)}
      >
        <option value="all">Todas as tarefas</option>
        <option value="completed">Completas</option>
        <option value="pending">Pendentes</option>
      </select>
    </div>
  );
}
