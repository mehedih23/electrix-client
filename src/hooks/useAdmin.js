import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false)
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:1111/admin/${email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('Access-Token')}`
                }
            })
                .then(response => response.json())
                .then(data => setAdmin(data.admin))
        }

    }, [user])

    return [admin]

}
export default useAdmin;