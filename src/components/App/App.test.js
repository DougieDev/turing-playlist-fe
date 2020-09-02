import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'
import { getSongs } from '../helpers/apiCalls'
jest.mock('../helpers/apiCalls')

test('true should be true', () => {
  expect(true).toEqual(true);
});

describe('App', () => {
  it('should display all songs from the server when App loads', async () => {
    getSongs.mockResolvedValue({
      songQueue: [
        {
            songName: "Swear",
            artistName: "Casiopea",
            link: "https://www.youtube.com/watch?v=6GEI3PpXEAo&t=1771s",
            id: 1
          },
          {
            songName: "Autumn Leaves",
            artistName: "Bill Evans Trio",
            link: "https://www.youtube.com/watch?v=r-Z8KuwI7Gc",
            id: 2
          },
          {
            songName: "Fair Weather",
            artistName: "Art Farmer",
            link: "https://www.youtube.com/watch?v=8-jfsUusSDQ",
            id: 3
          },
          {
            songName: "Django",
            artistName: "The Modern Jazz Quartet",
            link: "https://www.youtube.com/watch?v=wXnkD7_5vqM",
            id: 4
          }
      ]
    })
    render(<App />);

    const songOne = await waitFor( () => screen.getByText('Swear'));
    const songTwo = await waitFor( () => screen.getByText('Autumn Leaves'));

    expect(songOne).toBeInTheDocument();
    expect(songTwo).toBeInTheDocument();
  })
})
