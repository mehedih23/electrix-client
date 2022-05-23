import { useEffect, useState } from "react"

export default function useToken(data) {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = data?.user?.email;
        const currentEmail = { email: email };

        fetch(`http://localhost:1111/user/email=${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentEmail)
        })
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('access-token', data.token);
                setToken(data.token)
            })
    }, [data])

    return [token];
}