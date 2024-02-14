import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { createServer } from '../../test/server';
import AuthButtons from './AuthButtons';

// createServer() ===> GET '/api/user' ===> { user: null }
test('when user is not signed in, sign in and sign up are visible', async () => {});

test.skip('when user is not signed in, sign up is not visible', async () => {});

// createServer() ===> GET '/api/user' ===> { id: 3, user: 'test1@gmail.com' }
test.skip('when user is signed in, sign in and sign up are not visible', async () => {});

test.skip('when user is signed in, sign out is visible', async () => {});
