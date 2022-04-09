import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios, { AxiosResponse } from "axios"
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'
import {
  UsersListTable, Th,
  Td, ArrowDown, UsersListWrapper,
  TableContainer,
} from "./users.styles"
import { FlexRow, PlusIcon, DeleteIcon, } from "../../shared/index.styles"
import { H2 } from "../../typography"
import Button from "../../button"

import {
  UserInterface,
} from "../../../interface/User"
import UpdateUserPageContents from "../patch"

const UsersList = ():JSX.Element => {
  const navigate = useNavigate()
  const [users, setUsers] = useState<Array<UserInterface>>([])
  const [togglePatch, setToggle] = useState<boolean>(false)
  const [selectedUser, setSelectedUser] = useState<UserInterface | any>({})

  const baseUrl = "https://hidden-retreat-03498.herokuapp.com/api"

  useEffect(() => {
    getUsers()
  }, [])

  const allUsers = [...users];

  const getUsers = async (): Promise<any> => {
    const loadingToast = toast.loading('⏳ ...Loading Users')
    // const url = 'http://localhost:7000/api/users/all'
    const url = `${baseUrl}/users/all`

    return await axios
      .get(url, {})
      .then((res: AxiosResponse) => {
        // console.log(res.data.data.users, "<<< res >>")
        setUsers(res.data.data.users)
        toast.dismiss(loadingToast)
      })
      .catch((error: any) => {
        toast.error(error.role, { id: loadingToast })
        // console.log(error, 'Error >>>')
      })
  }

  const deleteUser = async (userId: number): Promise<void> => {
    const loadingToast = toast.loading('⏳ ...deleteing user record')
    // const url = `http://localhost:7000/api/users/${userId}`
    const url = `https://hidden-retreat-03498.herokuapp.com/api/users/${userId}`

    return await axios
      .delete(url, {})
      .then(async (res: AxiosResponse) => {
        toast.dismiss(loadingToast)
        toast.success(res.data.data.result)

        setUsers(users.filter((u) => u.id !== userId))
        navigate('/')
      })
      .catch((error: any) => {
        toast.error(error.role, { id: loadingToast })
        console.log(error, 'Error >>>')
      })
  }

  return (
    <UsersListWrapper>
      {/* @ts-ignore */}
      {togglePatch && 
      <UpdateUserPageContents 
        userdata={selectedUser} 
        refresh={async() => await getUsers()}
        setToggle={() => setToggle(!togglePatch)} />
      }
      <FlexRow jcsb>
        <H2>Users</H2>
        <Link to="/users/create" style={{color: 'transparent', textDecoration: 'none'}}>
          <Button flexD><PlusIcon /> Create User</Button>
        </Link>
      </FlexRow>
      <TableContainer>
        <UsersListTable>
          <tr>
            <Th>NAME</Th>
            <Th>EMAIL <ArrowDown /></Th>
            <Th>ROLE <ArrowDown /></Th>
            <Th>ACTIONS</Th>
          </tr>
          {allUsers && allUsers.map((user: UserInterface) => {
            const { id, fullname, email, role } = user;
            return (
            <tr key={id} onClick={(e) => {
              e.stopPropagation()
              setToggle(!togglePatch)
              setSelectedUser(user)
              }}>
              <Td>{fullname}</Td>
              <Td>{email}</Td>
              <Td>{role}</Td>
              <Td noTalign><DeleteIcon onClick={(e) => {
                e.stopPropagation()
                id && deleteUser(id)
                }} /></Td>
            </tr>
          )})}
        </UsersListTable>
      </TableContainer>
    </UsersListWrapper>
  )
}


export default UsersList