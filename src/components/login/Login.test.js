import { fireEvent, render, screen } from "@testing-library/react"
import Login from "./Login"

test("username input should be rendered",()=>{
    render(<Login/>)

    const usernameEl = screen.getByPlaceholderText(/username/i)
    expect(usernameEl).toBeInTheDocument()
})

test("password input should be rendered",()=>{
    render(<Login/>)

    const passwordEl = screen.getByPlaceholderText(/password/i)
    expect(passwordEl).toBeInTheDocument()
})

test("button should be rendered",()=>{
    render(<Login/>)

    const buttonEl = screen.getByRole(/button/i)
    expect(buttonEl).toBeInTheDocument() 
})

test("username input should be empty",()=>{
    render(<Login/>)

    const usernameEl = screen.getByPlaceholderText(/username/i)
    expect(usernameEl.value).toBe("")
})

test("password input should be empty",()=>{
    render(<Login/>)

    const passwordEl = screen.getByPlaceholderText(/password/i)
    expect(passwordEl.value).toBe("")
})


test("button should be disabled",()=>{
    render(<Login/>)

    const buttonEl = screen.getByRole(/button/i)
    expect(buttonEl).toBeDisabled() 
})

test("error should not be visible",()=>{
    render(<Login/>)

    const errorEl = screen.getByTestId("error")
    expect(errorEl).not.toBeVisible() 
})



test("username input should change",()=>{
    render(<Login/>)

    const usernameEl = screen.getByPlaceholderText(/username/i)
    const testValue = "value"
    fireEvent.change(usernameEl,{target : { value : testValue }})
    expect(usernameEl.value).toBe(testValue)
})

test("password input should change",()=>{
    render(<Login/>)

    const passwordEl = screen.getByPlaceholderText(/password/i)
    const testValue = "test"
    fireEvent.change(passwordEl,{ target: { value : testValue } })
    expect(passwordEl.value).toBe(testValue)
})
