import React from 'react'
import Navbar from '../Navbar/Navbar';
import styles from "./Homepage.module.css"
import Card from './Card/Card';
import ListElement from './ListElement';
import SearchBar from '../SearchBar/SearchBar';

const HomePage = () => {
  return (
    <>
        <Navbar/>
        <SearchBar/>
        <h1 className={styles.mainHead}>Nearby Stores</h1>
        <div className={styles.cards}>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <br/>
        <br/>
        <h1 className={styles.mainHead}>Queues Joined</h1>
        <br/>
        <div>
            <ListElement/>
            <ListElement/>
            <ListElement/>
            <ListElement/>
        </div>

    </>
  )
}

export default HomePage