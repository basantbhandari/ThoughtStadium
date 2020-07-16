import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../Layout/Spinner';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileGithub from './ProfileGithub';

import { getProfileById } from '../../actions/profile';
import { getPosts } from '../../actions/post';
import UserPostOnly from './UserPostOnly';

const Profile = ({
  getProfileById,
  getPosts,
  post: { posts },
  profile: { profile, loading },
  auth,
  match,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
    getPosts();
  }, [getProfileById, match.params.id, getPosts]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className='card center black protop'>
            <Link
              to='/profiles'
              className='card btn-large orange darken-4 white-text waves-effect waves-light '
            >
              Back To Profiles
            </Link>

            {auth.isAuthenticated &&
              auth.loading === false &&
              auth.user._id === profile.user._id && (
                <Link
                  to='/edit-profile'
                  className='card btn-large orange darken-4 white-text waves-effect waves-light '
                >
                  Edit Profile
                </Link>
              )}
          </div>

          <div>
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
            <div className='card center black-text'>
              <h2 className='purple white-text'>Event</h2>
              {profile.experience.length > 0 ? (
                <Fragment>
                  {profile.experience.map(experience => (
                    <ProfileExperience
                      key={experience._id}
                      experience={experience}
                    />
                  ))}
                </Fragment>
              ) : (
                <p className='card red center'>No Events Yet</p>
              )}
            </div>

            <div className='card center'>
              <h2 className='card purple white-text'>Education</h2>
              {profile.education.length > 0 ? (
                <Fragment>
                  {profile.education.map(education => (
                    <ProfileEducation
                      key={education._id}
                      education={education}
                    />
                  ))}
                </Fragment>
              ) : (
                <p className='card red white-text'>
                  No education credentials Yet
                </p>
              )}
            </div>

            {profile.githubusername && (
              <ProfileGithub username={profile.githubusername} />
            )}
          </div>

          {auth !== null && (
            <div className='card center'>
              <h1 className='card  purple white-text'>Your Thoughts</h1>
              <div className='posts'>
                {posts.map(post => (
                  <Fragment>
                    {post.user === auth.user._id && (
                      <UserPostOnly key={post._id} post={post} />
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  post: state.post,
});
export default connect(mapStateToProps, { getProfileById, getPosts })(Profile);
