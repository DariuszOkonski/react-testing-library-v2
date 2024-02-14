import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { createServer } from '../../test/server';
import AuthButtons from './AuthButtons';

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
  test('when user is not signed in, sign in and sign up are visible', async () => {
    console.log('test 1');
  });

  test('when user is not signed in, sign up is not visible', async () => {
    console.log('test 2');
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
  test('when user is signed in, sign in and sign up are not visible', async () => {
    console.log('test 3');
  });

  test('when user is signed in, sign out is visible', async () => {
    console.log('test 4');
  });
});
