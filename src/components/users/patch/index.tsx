import { useState, useEffect } from "react"
import axios, { AxiosResponse } from "axios"
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import {
  LeftArrowIcon, Form,
  Label, Input, SelectField,
} from "../../shared/index.styles"
import {
  PageHeader,
} from "../new/newuser.styles"
import { H2, P } from "../../typography"
import Button from "../../button"
import { UserInterface } from "../../../interface/User";
import { PatchUserWrapper, PatchUserContainer } from "./patchuser.styles"
import Navbar from "../../navbar"

interface Updater {
  userdata: UserInterface;
  setToggle: () => void;
  refresh: () => Promise<AxiosResponse>;
}

const UpdateUserPageContents = (props: Updater):JSX.Element => {
  const navigate = useNavigate()
  const { userdata, setToggle, refresh } = props;
  const { id } = userdata;
  const [fullname, setFullname] = useState<string>(userdata.fullname)
  const [role, setRole] = useState<string>(userdata.role)

  const roles: string[] = ["User", "Admin"]

  useEffect(() => {}, [role, fullname])


  const updateUser = async (): Promise<UserInterface | any> => {
    const loadingToast = toast.loading('⏳ ...Updating User')
    // const url = `http://localhost:7000/api/users/${id}`
    const url = ` https://hidden-retreat-03498.herokuapp.com/api/users/${id}`

    return await axios
      .patch(url, { fullname, role, id })
      .then(async (res) => {
        if(res.data.code === 200) {
          toast.success('User succesfully updated added🎙', { id: loadingToast })
          await refresh();
        }
        setToggle()
      })
      .catch((error: any) => {
        toast.error(error.role, { id: loadingToast })
      })
  }

  return (
    <PatchUserContainer>
      <Navbar />
      <PatchUserWrapper>
        <PageHeader>
          <LeftArrowIcon onClick={() => {
            setToggle()
            navigate(-1)}} />
          <H2>Update User</H2>
        </PageHeader>
        <Form onSubmit={(e) => {
          e.preventDefault()
          updateUser()}}>
          <Label htmlFor="fullname">NAME</Label>
          <Input
            type="text"
            name="fullname"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value)
            }}
            />

        <Label htmlFor="email">EMAIL</Label>
        <Input
          type="email"
          value={userdata.email}
          disabled
          />

          <Label htmlFor="role">ROLE</Label>
          <SelectField
            name="role"
            value={role}
            onChange={(e) => {
              setRole(e.target.value)
            }}
            >
              {roles.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </SelectField>
            <P 
              bold 
              alignCenter 
              clickable
              mt={["1.5rem"]} 
              onClick={() => {
                setToggle()
                navigate(-1)
              }}
            >Cancel</P>
            <Button type="submit" fullWidth>Update User</Button>
        </Form>
      </PatchUserWrapper>
    </PatchUserContainer>
  )
}

export default UpdateUserPageContents