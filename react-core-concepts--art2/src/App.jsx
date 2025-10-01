import Counter from './Counter';
import Batsman from './Bathman';
import './App.css'

function App() {


  function handleClick(){
    alert('I am clicked.')
  }

  const handleAdds5 = (num)  =>{
    const newNum = num + 5;
    alert(newNum);
  }

  const handleClick3 = () => {
    alert('clicked 3')
  }
  return (
    <>
      <Batsman></Batsman>
      <Counter></Counter>
      <h1>Vite + React</h1>
       
      <button onClick={handleClick}>Click Me

      </button>
      <button onClick= {function handleClick(){
        alert('clicked2')}}>Click  Me</button>

      <button onClick={handleClick}>Click me 3</button>  
      <button onClick={() => alert('click 4')}>Click me 4</button> 

      <button onClick={() => handleAdds5(10)}>Click Add 5</button> 
      
    </>
  )
}

export default App
