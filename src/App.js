import React from "react"
import './App.css';
import { AiFillTwitterSquare } from "react-icons/ai"
// import {AiFillFacebook} from "react-icons/ai"

function App() {

  
  const [quotes, setQoutes] = React.useState([]);
  const [randomQoute, setRandomQoute] = React.useState("")
  // const [color, setColor] = React.useState("#fff")

    React.useEffect(() => {
      try {
        async function QouteMachine(){
          const response = await fetch("https://type.fit/api/quotes")
          const data = await response.json();

          setQoutes(data);
          let randdata = Math.floor(Math.random() * data.length)
          setRandomQoute(data[randdata])

        }
        QouteMachine();
        
      } catch (error) {
        console.log(error);
      }
    }, [])

    
    
    const handleClick = event => {
      event.preventDefault();
        /*const color = [
          "#2E3D51",
          "#3697DB",
          "#28AD62",
          "#17A087",
          "#C1382C",
          "#bee1f4",
          "#7dc3e8",
          "#39a5dc",
          "#cfe7cd",
          "#9ecf99",
          "#6ec664",
          "#3f9c35",
          "#2d7623",
          "#1e4f18",
          "#3a9ca6",
          "#007a87",
          "#005c66",
          "#003d44",
          
        ]*/

      let randdata = Math.floor(Math.random() * quotes.length)
      // let randColordata = Math.floor(Math.random() * color.length)
      setRandomQoute(quotes[randdata]);
      // setColor(color(randColordata));
    }

  return (  
    <section className={`container`}>
    <div className="quote-box" id="quote-box">
      <h2>famous Qoutes</h2>
      {randomQoute ? (
        <>
        <h3 id="text">{randomQoute.text}</h3>
        <h5 id="author">- {randomQoute.author || "No author"}</h5>
        </>
      ) :(
        <h4>Naloading...</h4>
      )}
      <div className="quote-box">
        <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${randomQoute.text}--${randomQoute.author}`} > 
          <AiFillTwitterSquare />
        </a>
        {/* <a href="https://twitter.com/intent/tweet" id="tweet-quote"> 
          <AiFillFacebook />
        </a> */}
        <button type="submit" 
        className="new-quote" 
        id="new-quote" 
        onClick={handleClick} >Next quote</button>
      </div>
    </div>
    </section>
    );
}

export default App;
