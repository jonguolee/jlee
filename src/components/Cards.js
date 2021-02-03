import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div id="projects" className='cards'>
            <h1>Check out these EPIC projects!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-9.jpg'
                            text='Keeper App: An app that allows a note to be added and deleted.'
                            label='React.js'
                            path='/'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text='ToDo List'
                            label='React.js'
                            path='/'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-9.jpg'
                            text='TinDog Website: A simple landing page showcasing web design and layout principles.'
                            label='HTML/CSS/Bootstrap'
                            path='/'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text='Dice Game: Generate two player dice with a random value with a response based on which die has a greater value.'
                            label='Javascript'
                            path='/'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text='Drum Kit: A simple website that utilizes event listeners to detect and respond to user interaction.'
                            label='Javascript'
                            path='/'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-2.jpg'
                            text='Simon Game: A game in which a user must follow a random pattern that increases in length and complexity.'
                            label='Javascript/jQuery'
                            path='/'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text='Blog Website'
                            label='EJS/Express.js/Node.js'
                            path='/'
                        />

                    </ul>
                </div>
            </div>
            <hr />
            <h1>Current/Upcoming Projects</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-9.jpg'
                            text='Houston Money Week Website'
                            label='WordPress'
                            path='/'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text='Pioneers Website'
                            label='HTML/CSS/JS'
                            path='/'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text='Netflix Clone App'
                            label='React.js'
                            path='/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;

