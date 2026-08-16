import { useState } from 'react';

export default function UseState(){

    const [name, setName] = useState();

    const names = ['russel', 'almar', 'aedan', 'bobby', 'farhan', 'hibron']

    let [i, setI] = useState(0)
    function getNames(){
        console.log(i)
        setName(names[i])

        //resets the i back to 0 when it hits 5(the end of an array)
        if(i <5){
            setI(i + 1)
        }else{
            setI(0)
        }
        
        
    };


    let [display, setDis] = useState(0);
    let [alarm, setAlarm] = useState();
    let [clr, setColor] = useState(false)
    function less(){
        if(display >0 ){
            setDis(display - 1)
        }else{
            setAlarm("cannot have a value less than 0");
            setColor(true)
            setTimeout(()=>{
                setAlarm('')
                setColor(false)
            },700)
        }
    }
    function more(){
        setDis(display + 1)
    }


    return(

        <>
            <p>Name: {name}</p>
            <button onClick={getNames}>Submit</button>

            <br />
            <br />

            <button onClick={less}><b>-</b></button> 
            <h3 style={{color: clr? "red" : 'black'}}>{display}</h3>
            <button onClick={more}><b>+</b></button>
            <p>{alarm}</p>

            

            
            
        </>

    )
};