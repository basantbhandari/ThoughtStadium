import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../Layout/Spinner';
import { getGithubRepos } from '../../actions/profile';

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos, username]);

  return (
    <div className='card center'>
      <h2 className='card center purple white-text'>Github Projects</h2>

      {repos === null ? (
        <Spinner />
      ) : (
        repos.map(repo => (
          <div key={repo.id} className='profExpmy card green '>
            <div class='row'>
              <div class='col s9'>
                <h4>
                  <a
                    href={repo.html_url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='white-text'
                  >
                    {repo.name}
                  </a>
                </h4>
                <p className='white-text center'>{repo.description}</p>
              </div>
              <div class='col s3 center white-text'>
                <ul>
                  <li className='badge badge-primary'>
                    Stars: {repo.stargazers_count}
                  </li>
                  <li className='badge badge-dark'>
                    Watchers: {repo.watchers_count}
                  </li>
                  <li className='badge badge-light'>
                    Forks: {repo.forks_count}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  repos: state.profile.repos,
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
