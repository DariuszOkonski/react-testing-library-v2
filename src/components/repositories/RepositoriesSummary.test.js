import { screen, render } from '@testing-library/react';
import RepositoriesSummary from './RepositoriesSummary';

test('displays the primary language on the repository v1', () => {
  const repository = {
    language: 'Javascript',
    stargazers_count: 5,
    forks: 30,
    open_issues: 1,
  };

  render(<RepositoriesSummary repository={repository} />);
  const language = screen.getByText('Javascript');
  expect(language).toBeInTheDocument();
});

test('displays the primary language on the repository v2', () => {
  const repository = {
    language: 'Javascript',
    stargazers_count: 5,
    forks: 30,
    open_issues: 1,
  };
  render(<RepositoriesSummary repository={repository} />);
  const language = screen.getByTestId('language');
  expect(language).toBeInTheDocument();
});

test('displays information about the repository', () => {
  const repository = {
    language: 'Javascript',
    stargazers_count: 5,
    forks: 30,
    open_issues: 1,
  };

  render(<RepositoriesSummary repository={repository} />);

  for (let key in repository) {
    const value = repository[key];
    const elemet = screen.getByText(new RegExp(value));

    expect(elemet).toBeInTheDocument();
  }
});
