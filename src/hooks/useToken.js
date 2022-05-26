import { useEffect, useState } from "react"

const useToken = (data) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = data?.user?.email;
        const currentEmail = { email: email };
        if (email) {

            fetch(`https://limitless-headland-17774.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentEmail)
            })
                .then(response => response.json())
                .then(data => {
                    localStorage.setItem('Access-Token', data.token);
                    setToken(data.token)
                })
        }
    }, [data])

    return [token];
}

export default useToken;