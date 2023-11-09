import { render, screen } from "@testing-library/react"
import Login from "./Login"

test("username input should be rendered",()=>{
    render(<Login/>)

    const userInputEl = screen.getByPlaceholderText(/username/i)
    expect(userInputEl).toBeInTheDocument()
})

test("password input should be rendered",()=>{
    render(<Login/>)

    const userInputEl = screen.getByPlaceholderText(/password/i)
    expect(userInputEl).toBeInTheDocument()
})

test("button input should be rendered",()=>{
    render(<Login/>)

    const userInputEl = screen.getByRole(/button/i)
    expect(userInputEl).toBeInTheDocument() 
})