
import { Suspense, useState } from 'react'
import './App.css'
 import { ToastContainer} from 'react-toastify';
import AvailabkePlayers from './Conmonents/AvailabkePlayers/AvailabkePlayers'
import Navbar from './Conmonents/Navbar/Navbar'
import SelectedPlayers from './Conmonents/SelectedPlayers/SelectedPlayers'

const fetchPlayers = async () => {
  const res = await fetch("/players.json")
  return res.json()
}
const playersPromise = fetchPlayers()
function App() {
  const [toggle, setToggle] = useState(false)
  const [availableBalance,setAvailableBalance] = useState(60000000)
  const[purchasedPlayers, setPurchasedPlayers] = useState([])

  const removePlayer = (p) => {
    const fileteredData = purchasedPlayers.filter(ply=>ply.player_name!==p.player_name)
    console.log(fileteredData)
    setPurchasedPlayers(fileteredData)
    setAvailableBalance(availableBalance+parseInt(p.price.split("USD").join("").split(",").join("")))
  }
  
  

  return (
    <>
    <Navbar availableBalance={availableBalance}> </Navbar>

    <div className='max-w-[1200px] mx-auto flex justify-between items-center'>
      <h1 className='font-bold text-2xl'>{
        toggle===true?"Available Players":`Selexted Player (${purchasedPlayers.length}/6)`
        }</h1>

      <div className='font-bold'>
        <button onClick={()=>setToggle(true)} className={`py-3 px-4 p-3 border-1 border-gray-400 
          rounded-l-2xl border-r-0 ${toggle===true?"bg-[#E7FE29]":""}`}>Available</button>
        <button onClick={()=>setToggle(false)} className={`py-3 px-4 p-3 border-1 border-gray-400 
          rounded-r-2xl border-l-0 ${toggle===false?"bg-[#E7FE29]":""}`}>Selected <span>({purchasedPlayers.length})</span></button>
      </div>
    </div>

    {
      toggle === true?<Suspense fallback={<span className=
      "loading loading-spinner loading-lg"></span>}><span className="loading loading-spinner loading-lg"></span>
      <AvailabkePlayers purchasedPlayers={purchasedPlayers} 
      setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} 
      playersPromise={playersPromise}></AvailabkePlayers>
    </Suspense>:<SelectedPlayers removePlayer={removePlayer} 
    purchasedPlayers={purchasedPlayers}></SelectedPlayers>
    }
    <ToastContainer/>
    </>
  )
}

export default App
