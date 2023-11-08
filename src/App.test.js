import { render, screen } from '@testing-library/react';
import App from './App';

render(<App />);
const linkElement = screen.getByText(/first test/i);

describe("App Component",()=>{
  test('renders first test link', () => {
  
    expect(linkElement).toBeInTheDocument();
  });
})



