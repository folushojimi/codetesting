import apiFetch from "./apiFetch"

export const createUsers =({username, password})=>apiFetch('POST', '/user', {
    username,
    password
})


// POST - /user

// body: {username, password}
// export const createUsers =({username, password})=>apiFetch('POST', '/users', {
//     username,
//     password
//     })