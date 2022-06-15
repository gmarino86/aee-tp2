export async function login(mail, pass) {
    return fetch('http://localhost:9001/api/auth/login',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({mail, pass})
    })
        .then(function (response) {
            if (response.status === 200) {
                return response.json()
            }
            else {
                throw new Error("Invalid credentials")
            }
        })
}