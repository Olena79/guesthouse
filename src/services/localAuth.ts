export const auth = {
  register: (email:string, password:string, name?:string) => {
    const users = JSON.parse(localStorage.getItem('gh_users')||'[]')
    if(users.find((u:any)=>u.email===email)) throw new Error('User exists')
    const u = { email, password, name: name||'', id: Date.now().toString() }
    users.push(u)
    localStorage.setItem('gh_users', JSON.stringify(users))
    localStorage.setItem('gh_user', JSON.stringify(u))
    return u
  },
  login: (email:string, password:string) => {
    const users = JSON.parse(localStorage.getItem('gh_users')||'[]')
    const u = users.find((u:any)=>u.email===email && u.password===password)
    if(!u) throw new Error('Invalid credentials')
    localStorage.setItem('gh_user', JSON.stringify(u))
    return u
  },
  logout: ()=> localStorage.removeItem('gh_user'),
  getUser: ()=> JSON.parse(localStorage.getItem('gh_user')||'null')
}
