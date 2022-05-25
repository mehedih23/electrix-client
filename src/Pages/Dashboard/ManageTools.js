import React from 'react'
import { useQuery } from 'react-query'
import ManageTool from './ManageTool'

const ManageTools = () => {
    const { isLoading, error, data: tools, refetch } = useQuery('repoData', () =>
        fetch('http://localhost:1111/tools').then(res =>
            res.json()
        )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className='px-1 md:px-2 lg:px-4'>
            <h3 className='text-3xl my-4'>Manage all tools</h3>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>sl no.</th>
                            <th>Item</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((tool, index) => <ManageTool
                                key={tool._id}
                                tool={tool}
                                index={index}
                                refetch={refetch}
                            ></ManageTool>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageTools