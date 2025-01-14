import React from "react";
import { useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
export default function Header(){
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-white">Lista de Tarefas</h1>
            <nav className="hidden md:flex space-x-10">
              {/* Implementar nova rota para vizualizar somente as tarefas separads */}
              <Link href="/">
              <span className={`hover:underline ${styles.menuItem}`}> Início </span> </Link>
              <Link href="/">
                <span className={`hover:underline ${styles.menuItem}`}>Lista de Tarefas</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};