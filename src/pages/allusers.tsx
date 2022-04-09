import Navbar from "../components/navbar"
import UsersList from "../components/users/list"

// const users: Array<UserInterface> = [
//   {
//     id: 1,
//     fullname: 'sean peance',
//     email: 'sean@domain.com',
//     role: Role.User
//   },
//   {
//     id: 2,
//     fullname: 'Fred bee',
//     email: 'fred@domain.com',
//     role: Role.Admin
//   },
//   {
//     id: 3,
//     fullname: 'john doe',
//     email: 'eddoe@domain.com',
//     role: Role.Admin
//   }
// ]

const UsersPage = ():JSX.Element => {
  return (
    <>
      <Navbar />
      <UsersList />
    </>
  )
}

export default UsersPage
