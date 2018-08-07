export function login(credentials) {
    return new Promise((res, rej) => {
        axios.post('/api/auth/login', credentials)
            .then((response) => {
                res(response.data);
            })
            .catch((err) => {
                rej("Invalid credentials");
            })
    })
}

export function getLocalUser() {
    const userStr =  localStorage.getItem("user");
    if (!user) {
        return null;
    }
    return JSON.parse(userStr);
}