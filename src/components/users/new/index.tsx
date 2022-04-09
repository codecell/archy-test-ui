// import React, { useState } from "react"
import axios from "axios"
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from "react-router-dom";
import {
  LeftArrowIcon, Form,
  Label, Input, SelectField,
} from "../../shared/index.styles"
import {
  NewUserWrapper, PageHeader,
} from "./newuser.styles"
import { H2, P } from "../../typography"
import Button from "../../button"
import { newUserValidator } from "../../../validators"


const NewUserPageContents = ():JSX.Element => {
  const navigate = useNavigate()

  const roles = ['User', 'Admin']

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(newUserValidator()),
  })

  const addUser = async (values: any): Promise<any> => {
    const loadingToast = toast.loading('⏳ ...Adding new User')
    // const url = "http://localhost:7000/api/users/new"
    const url = "https://hidden-retreat-03498.herokuapp.com/api/users/new"

    const { fullname, email, role } = values
    console.log(values, "userData Values >>>")

    return await axios
      .post(url, { fullname, email, role })
      .then(async (res) => {
        toast.success('New User succesfully added🎙', { id: loadingToast })
        reset({
          fullname: '',
          email: '',
          role: '',
        })

        console.log(res.data, "userData Values  Res>>>")
        if(res.data.code === 201) {
          await navigate("/")
        }
      })
      .catch((error: any) => {
        toast.error(error.role, { id: loadingToast })
        // console.log(error, 'Error >>>')
      })
  }

  return (
    <NewUserWrapper>
      <PageHeader>
        <LeftArrowIcon onClick={() => navigate(-1)} />
        <H2>Create User</H2>
      </PageHeader>
      <Form onSubmit={handleSubmit(addUser)}>
        <Label htmlFor="fullname">NAME</Label>
        <Input
          type="text"
          placeholder="Enter full name"
          {...register('fullname', { required: true })}
          />
        {errors.fullname && (
          <P red fontSize={["85%"]}>
            {errors.fullname.message}
          </P>
        )}

        <Label htmlFor="email">EMAIL</Label>
        <Input
          type="email"
          placeholder="Enter email"
          {...register('email', { required: true })}
          />
        {errors.email && (
          <P red fontSize={["85%"]}>
            {errors.email.message}
          </P>
        )}

        <Label htmlFor="role">ROLE</Label>
        <SelectField
          // name="role"
          {...register('role', { required: true })}
          >
            <option hidden value="">Select Role</option>
            {roles.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </SelectField>
          {errors.role && (
          <P red fontSize={["85%"]}>
            {errors.role.message}
          </P>
        )}
          <P 
            bold 
            alignCenter 
            clickable
            mt={["1.5rem"]} 
            onClick={() => navigate(-1)}
          >Cancel</P>
          <Button type="submit" fullWidth>Create User</Button>
      </Form>
    </NewUserWrapper>
  )
}

export default NewUserPageContents