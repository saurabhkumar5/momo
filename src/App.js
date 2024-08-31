
import photo from './saurabh.png'
import video from './car.mp4'
import './App.css';


function App(){

    
  return(
    <div>
      <h1 style={{backgroundColor:"red",color:"yellow"}}>hello from react</h1>
      <h2>kullu</h2>
      <a href="https://github.com/saurabhkumar5/batch7pm_reactjs">click here</a>
      <img src="https://img1.wsimg.com/isteam/ip/1172a89b-094a-415b-99fe-cc1e7d3cd9b0/blob.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1500,h:1000,cg:true"/>
      <img src={photo}/>
      <video src={video} controls></video>
    </div>
   
  )

}

export default App;