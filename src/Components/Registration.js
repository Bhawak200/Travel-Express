/* eslint no-useless-escape: 0 */
import React  from 'react'
import {Button,Form,Col} from 'react-bootstrap'
import { useForm }  from 'react-hook-form'


const Registration=(props) =>{

const { register ,handleSubmit,errors } = useForm()


return (
<Form className="container-fluid" onSubmit={handleSubmit(props.onRegister)} >
  <Form.Row>
      <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control ref={register({required:true, pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}  name="email"type="email" placeholder="email@gmail.com"/>
       {
         errors.email && 
         <div style={{color:"red"}}>
           {errors.email.type==="required" && <span>Email is Required</span>}
           {errors.email.type==="pattern" && <span>Email Address is not Valid</span>}
         </div>
       }

    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control ref={register({required:true,minLength:6,maxLength:10})}  name="password"type="password" placeholder="Password"/>
      {errors.password && 
      <div style={{color:"red"}}>
        {errors.password.type==='required' && <span>Password Required</span>}
        {errors.password.type==='minLength' && <span>Max Length:10 and Min Length : 6</span>}
      </div>
      }
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridName">
    <Form.Label>Name</Form.Label>
    <Form.Control ref={register({required:true,maxLength:20})} name="fullName" placeholder="Rohan"/>
    {errors.fullName &&
     <div style={{color:"red"}}>
    {errors.fullName.type==='required' && <span>Name Required</span>}
    {errors.fullName.type==='maxLength' && <span>Max Length :20</span>}
      </div>
    }
  </Form.Group>

  <Form.Group controlId="formGridTitle">
    <Form.Label>Title</Form.Label>
    <Form.Control ref={register({required:true,maxLength:10})} name="Title" placeholder="New Delhi/Mumbai/Jaipur"/>
    {errors.Title && 
     <div style={{color:"red"}}>
      {errors.Title.type==='required' && <span>Title Required</span>}
      {errors.Title.type==='maxLength' && <span>Max Length :10 </span>}
      </div>
    }

  </Form.Group>

  <Form.Group controlId="formGridDescription">
    <Form.Label>Description</Form.Label>
    <Form.Control ref={register({required:true,maxLength:50})} name="Description" placeholder=""></Form.Control>
    {errors.Description && 
    <div style={{color:"red"}}>
     {errors.Description.type==='required' && <span>Description Required</span>}
     {errors.Description.type==='maxLength' && <span>Max Length :50</span>}
    </div>
    }
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridlink">
      <Form.Label>Image Url</Form.Label>
      <Form.Control  ref={register({required:true,pattern:/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm})} name="Image"/ >
      {
         errors.Image && 
         <div style={{color:"red"}}>
           {errors.Image.type==="required" && <span>Image Url is Required</span>}
           {errors.Image.type==="pattern" && <span>Image Address is not Valid</span>}
         </div>
       }
    </Form.Group>

    <Form.Group as={Col} controlId="formGridWebsite">
      <Form.Label>Website Url</Form.Label>
      <Form.Control ref={register({required:true,pattern:/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm})}  name="link"/>
      {
         errors.link && 
         <div style={{color:"red"}}>
           {errors.link.type==="required" && <span>Web Url is Required</span>}
           {errors.link.type==="pattern" && <span>Web Address is not Valid</span>}
         </div>
       }
    </Form.Group>

  </Form.Row>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
)
}
export default Registration
