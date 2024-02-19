import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { createServer } from '../../test/server';
import AuthButtons from './AuthButtons';

async function renderComponent() {
  render(
    <MemoryRouter>
      <AuthButtons />
    </MemoryRouter>
  );
  await screen.findAllByRole('link');
}

describe('when user is not signed in', () => {
  // createServer() ===> GET '/api/user' ===> { user: null }
  createServer([
    {
      path: '/api/user',
      res: () => {
        return { user: null };
      },
    },
  ]);
  test('sign in and sign up are visible', async () => {
    await renderComponent();

    // screen.debug();
    // await pause();
    // screen.debug();
    // await screen.findAllByRole('link');

    const signInButton = screen.getByRole('link', { name: /sign in/i });
    const signUpButton = screen.getByRole('link', { name: /sign up/i });

    expect(signInButton).toBeInTheDocument();
    expect(signInButton).toHaveAttribute('href', '/signin');
    expect(signUpButton).toBeInTheDocument();
    expect(signUpButton).toHaveAttribute('href', '/signup');
  });

  test('sign up is not visible', async () => {
    await renderComponent();
    // await screen.findAllByRole('link');

    const signOutButton = screen.queryByRole('link', { name: /sign out/i });

    expect(signOutButton).not.toBeInTheDocument();
  });
});

describe('when user is signed in', () => {
  // createServer() ===> GET '/api/user' ===> { id: 3, user: 'test1@gmail.com' }
  createServer([
    {
      path: '/api/user',
      res: () => {
        return { user: { id: 2, email: 'test1@gmail.com' } };
      },
    },
  ]);
  test('sign in and sign up are not visible', async () => {
    await renderComponent();

    const signInButton = screen.queryByRole('link', {
      name: /sign in/i
    });
    const signUpButton = screen.queryByRole('link', {
      name: /sign up/i
    });

    expect(signInButton).not.toBeInTheDocument();
    expect(signUpButton).not.toBeInTheDocument();
  });

  test('sign out is visible', async () => {
    await renderComponent();

    const signOutButton = screen.getByRole('link', {
      name: /sign out/i
    })

    expect(signOutButton).toBeInTheDocument();
    expect(signOutButton).toHaveAttribute('href', '/signout')
  });
});

// const pause = () =>
//   new Promise((resolve) => {
//     setTimeout(resolve, 100);
//   });
