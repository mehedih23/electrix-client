import React, { useEffect, useState } from 'react'
import Tool from './Tool'

const Tools = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('https://limitless-headland-17774.herokuapp.com/tools')
            .then(response => response.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className='my-8'>
            <h3 className='text-3xl font-bold text-center'>Tools We Have - </h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    )
}

export default Tools
