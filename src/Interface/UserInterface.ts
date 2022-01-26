export interface User {
    name: { title: string, first: string, last: string },
    email: string,
    picture: { medium: string }
    location: { street: {name:string}, city: string, country: string },
    id: { name: string, value: string },
}