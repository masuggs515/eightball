import React, {useState} from 'react';
import './Eightball.css';

const phraseList = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ];

const Eightball = (props) => {
    const [words, setWords] = useState('Think of a question.');
    const [backgroundColor, setBackgroundColor] = useState('black');


    const handleClick = () =>{
        const chooseRandomPhrase = phraseList[Math.floor(Math.random() * phraseList.length)];
        setWords(chooseRandomPhrase.msg);
        setBackgroundColor(chooseRandomPhrase.color);
    };

    const restart = () =>{
        setWords('Think of a question.');
        setBackgroundColor('black');
    };

    return (
        <>
        <div className='Eightball'>
            <div className='Eightball-button' style={{ backgroundColor: backgroundColor }} onClick={handleClick}>
                {words}
                </div>
        </div>
        <button className='Eightball-reset-button' onClick={restart}>Reset Ball</button>
        </>
    )
};

export default Eightball;