import React from 'react'
import Swal from 'sweetalert2'

const Order = ({ order, index, refetch }) => {
    const { _id, email, productName, orderQuantity, total } = order;

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                Swal.fire(
                    'Deleted!',
                    'Your item has been deleted.',
                    'success',
                    fetch(`http://localhost:1111/order/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (data.acknowledged) {
                                refetch();
                            }
                        })

                )
            }
        })

    }


    return (
        <tr >
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{productName}</td>
            <td>{orderQuantity}</td>
            <td>${total}</td>
            <td>
                <button

                    className='btn btn-accent btn-sm'
                >Pay</button>  <button
                    onClick={handleDelete}
                    className='btn btn-error btn-sm'
                >Delete</button>
            </td>
        </tr>
    )
}

export default Order