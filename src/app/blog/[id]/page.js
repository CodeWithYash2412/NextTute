import React from 'react'

const page = ({ params }) => {
    // console.log(params.id)
    return (
        <div> blog: {params.id} </div>
    )
}

export default page