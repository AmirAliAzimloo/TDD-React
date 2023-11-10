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

    const buttonEl = screen.getByRole("button")
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

    const buttonEl = screen.getByRole("button")
    expect(buttonEl).toBeDisabled() 
})


test("loading should not be rendered",()=>{
    render(<Login/>)

    const buttonEl = screen.getByRole("button")
    expect(buttonEl).not.toHaveTextContent(/plaese wait/i)
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


test("button should not be disabled",()=>{
    render(<Login/>)

    const buttonEl = screen.getByRole("button")
    const usernameEl = screen.getByPlaceholderText(/username/i)
    const passwordEl = screen.getByPlaceholderText(/password/i)

    const testValue = "test"
    fireEvent.change(usernameEl,{ target : { value : testValue } })
    fireEvent.change(passwordEl,{ target : { value : testValue } })


    expect(buttonEl).not.toBeDisabled() 
})

test("loading should be rendered when click", () => {
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    const usernameInputEl = screen.getByPlaceholderText(/username/i);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
  
    const testValue = "test";
  
    fireEvent.change(usernameInputEl, { target: { value: testValue } });
    fireEvent.change(passwordInputEl, { target: { value: testValue } });
    fireEvent.click(buttonEl);
  
    expect(buttonEl).toHaveTextContent(/please wait/i);
  });
