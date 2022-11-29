import './App.css'

function App() {

  const handleMove = e => {
    const left = document.getElementById("left-side");
    left.style.width = `${e.clientX / window.innerWidth * 100}%`;
  }

  return (
    <div onMouseMove={(e)=> handleMove(e)} onTouchMove={e => handleMove(e.touches[0])}>
      <div id="left-side" className="side">
        <h2 className="title">
          Sometimes the simple way is 
          <span className="fancy">better</span>      
        </h2>
      </div>
      <div id="right-side" className="side">
        <h2 className="title">
          Sometimes the simple way is  
          <span className="fancy">better</span>     
        </h2>
      </div>

      <a id="source-link" className="meta-link" href="https://haf.solutions" target="_blank">
        <i className="fa-solid fa-link"></i>
        <span className="roboto-mono">Contact Us</span>
      </a>
    </div>
  )
}

export default App;

// Slider Controller
// const left = document.getElementById("left-side");

// const handleMove = e => {
//   left.style.width = `${e.clientX / window.innerWidth * 100}%`;
// }

// document.onmousemove = e => handleMove(e);
// document.ontouchmove = e => handleMove(e.touches[0]);
