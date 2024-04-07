import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () =>{
  test('renders SHIVA SHAKTI BHAKTI ASHRAM', () => {
    render(<App />);
    const titleElement = screen.getByText(/SHIVA SHAKTI BHAKTI ASHRAM./);
    expect(titleElement).toBeInTheDocument();
  });
  test('renders address', () => {
    render(<App />);
    const addElement = screen.getByText(/bhojpur, nepal./i);
    expect(addElement).toBeInTheDocument();
  });

})

