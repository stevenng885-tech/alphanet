import React from 'react'
import Card from './components/Card'
const ids = [
    "7560272793259019538",
    "7559073147220249864",
    "7560558832624209170",
    "7562416472836869383",
    "7561664662526283016",
    "7561015204050521352",
    "7559857079775792402",
    "7559486178852900104",
    "7558297985046809874",
]

const Home = async () => {
    return (
        <div className='w-full min-h-screen relative bg-[var(--nineth)]'>
            <div className='pt-30 container mx-auto flex flex-col '>
                <div className='flex flex-4 gap-10 justify-center xl:justify-between flex-wrap'>
                    {
                        ids.map((id, index) => {
                            return (
                                <Card key={id} >
                                    <iframe className='w-full h-[400px]' src={`https://www.tiktok.com/player/v1/${id}?&rel=0${index === 0 && "&autoplay=1"}`} >
                                    </iframe>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home