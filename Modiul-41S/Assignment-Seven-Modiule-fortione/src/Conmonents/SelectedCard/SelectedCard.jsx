import React from 'react';

const SelectedCard = ({player,removePlayer}) => {
    console.log(player)

    const handleRemove = () =>{
        removePlayer(player)
    }

    return (
        <div>
            <div className='border-2 border-gray-300 p-3 mt-5 flex justify-between items-center'>
                <div className='rounded-xl flex items-center'>
                    <img src={player.player_image} className='h-[50px] w-[50px] rounded-xl' alt="" />
                    <div className='ml-2'>
                        <h1>{player.player_name}</h1>
                        <p className='text-xs'>{player.playing_role}t</p>
                    </div>
                    
                </div>
                <div onClick={handleRemove} className='h-[30px] w-[30px]'>
                    <img src={"https://i.ibb.co.com/p6SPcrFb/Chat-GPT-Image-Oct-6-2025-06-08-05-PM.png"} alt="" />
                </div>
            </div>
        
        </div>
    );
};

export default SelectedCard;