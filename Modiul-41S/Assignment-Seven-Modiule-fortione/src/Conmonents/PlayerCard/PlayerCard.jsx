import React, { useState } from 'react';
import useImg from "../../assets/Icone.png"
import iconde from "../../assets/Iconde.png"
import { toast } from 'react-toastify';
const PlayerCard = ({player,setAvailableBalance,availableBalance,
    purchasedPlayers,setPurchasedPlayers}) => {
    const [isSelected,setIsSelected] = useState(false)

    const handleSelected = (playerData) =>{
        const PlayerPrice = parseInt(playerData.price.split("USD").join("").split(",").join(""))

        if(availableBalance<PlayerPrice){
            toast("Not enough coins!!")
            return
        }
        if(purchasedPlayers.length===6){
            toast("6 players already selected")
            return
        }
        setIsSelected(true)
        setAvailableBalance(
            availableBalance-PlayerPrice
        );
        setPurchasedPlayers([...purchasedPlayers,playerData])
        toast("Player Purchased")
    }  
    return (
        <div className="card bg-base-100 shadow-sm p-4">
          <figure>
            <img
              src={player.player_image}
              alt="Shoes" className='w-full h-300px object-cover'
            />
          </figure>
          <div className="mt-p">
            <div className='flex'>
                <img className='w-[60px] h[60px]' src={useImg} alt="" /><h2 className="card-title ml-2">{player.player_name}</h2>
            </div>
            <div className='flex justify-between border-b-1 pb-2 border-gray-400'>
                <div className='flex items-center'>
                    <img className='w-[40px] h[40px] mt-3' src={iconde} alt="" />
                    <span className='ml-2'>{player.player_country}</span>
                </div>
                <button className='btn'>{player.playing_role}</button>
            </div>
            <div className='flex justify-between font-bold'>
                <span>{player.rating}</span>
                <span>5</span>
            </div>
            <div className='flex justify-between mt-4'>
                <span className='font-bold'>{player.bating_style}</span>
            <span>{player.bowling_style}</span>
            </div>
            
            <div className="card-actions mt-3 flex justify-between items-center">
               <p className='font-bold'>Price: ${player.price}</p> 
              <button disabled={isSelected} onClick={()=>{handleSelected(player)}} className="btn">{isSelected===true?"Selected":"Choose Player"}</button>
            </div>
          </div>
        </div>
    );
};

export default PlayerCard;