

import React, { useEffect, useState } from "react";
import '../EventDetails/Event.css'

const Event = () => {
   
    const [venue, setvenue] = useState('') 
    const [date, setdate] = useState('') 
    const [time, settime] = useState('') 
    const [caditattented, setcaditattented] = useState('') 
    const [chiefguest, setchiefguest] = useState('') 
    
  
   
  
   
  
    const handleLogin = (event) => {
      event.preventDefault()
      console.log( venue,date,time,caditattented,chiefguest)
    }
  
    return (
      <div style={{backgroundColor:"#66cc99",height:900,paddingTop:60}}>
          <div style={{alignItems:"center",backgroundColor:'white',marginLeft:300,marginRight:320,borderRadius:20,marginBlockStart:100,height:730}}>
         
          <h2 style={{justifycontent:40,marginLeft:260,marginBottom:30,marginTop:100,padding:20}}>EVENT DETAILS</h2>
  
          <div style={{padding:'1px 2px',marginBottom:50,marginTop:-40}}className="App">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2fBtJs7Pt0nzvsCW2Mc1czAXo_8xaGjwpmE1fbB6Bw&s"
        width={300} style={{margin:'58px 70px 170p'}}
          />
           
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLHo2KWdGKbY4xBXBly6tKtOHx0S_RhTMmlA&usqp=CAU"
        width={290} style={{margin:'38px 65px'}}
          />
          
           
  
        <form onSubmit={handleLogin}>
         
          <div>
          
              <input  style={{marginLeft:230,marginBottom:20}}
              type="text"
              placeholder="Venue"
              value={venue}
              name="venue"
              onChange={({ target }) => setvenue(target.value)}
            />
          </div>
          <div>
           
              <input style={{marginLeft:230,width:185,marginBottom:20}}
              type="date"
              value={date}
              placeholder="date"
              name="date"
              onChange={({ target }) => setdate(target.value)}
            />
          </div>
          <div>
           
              <input style={{marginLeft:230,width:185,marginBottom:20}}
              type="time"
              value={time}
              placeholder="time"
              name="time"
              onChange={({ target }) => settime(target.value)}
            />
          </div>
          <div>
          
              <input style={{marginLeft:230,marginBottom:20}}
              type="text"
              value={caditattented}
              placeholder="No.of.cadits attented"
              name="caditattented"
              onChange={({ target }) => setcaditattented(target.value)}
            />
          </div>
          <div>
           
              <input style={{marginLeft:230,marginBottom:20}}
              type="chiefguest"
              value={chiefguest}
              placeholder="chiefguest"
              name="chiefguest"
              onChange={({ target }) => setchiefguest(target.value)}
            />
          </div>
          <button
    
        style={{width:100,height:40,padding:10,backgroundColor:"#66cc99",marginTop:30,marginLeft:270,borderRadius:15,marginRight:10}}
    >Submit</button>
        </form>
        </div>
        </div>
      </div>
    )
  }
  
  export default Event