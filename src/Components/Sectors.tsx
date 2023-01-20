import React, { Dispatch, SetStateAction } from 'react'
import sectors from "../data/sectors.json";

function Sectors({ setSector, sector }: { setSector: Dispatch<SetStateAction<number>>, sector: number }) {
    
    const sectorSelected = (id: number) => {
        setSector(id);
    }
    sectors.sectors.map(sctr => console.log(sctr.name));


    const sectorList = sectors.sectors.map(sctr => <span key={sctr.id} id={sctr.id.toString()}
        className={`hover:bg-gray-300 w-full whitespace-pre cursor-pointer text-start ${(sctr.id === sector) ? "bg-gray-300" : ""}`} onClick={() => { sectorSelected(sctr.id) }}>{sctr.name}</span>);

    return (
        <div className='h-full w-full flex flex-col items-start overflow-auto bg-gray-200/60 px-4 py-1'>
            
            {sectorList}
        </div>
    )
}

export default Sectors


