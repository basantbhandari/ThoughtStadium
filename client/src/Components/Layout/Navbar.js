import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import companylogo from '../../img/cmplogo.png';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Fragment>
      <li>
        <a
          href='/profiles'
          className='waves-effect green accent-3 waves-light btn-large'
        >
          <i className='fas fa-lightbulb'></i>{' '}
          <span className='hide-sm'>Thinkers</span>
        </a>
      </li>
      <li>
        <a
          href='/posts'
          className='waves-effect green accent-3 waves-light btn-large'
        >
          <i className='fas fa-blog'></i>{' '}
          <span className='hide-sm'>Thoughts</span>
        </a>
      </li>
      <li>
        <a
          href='/dashboard'
          className='waves-effect green accent-3 waves-light btn-large'
        >
          <i className='fas fa-user'></i>{' '}
          <span className='hide-sm'>Dashboard</span>
        </a>
      </li>
      <li>
        <a
          onClick={logout}
          href='/'
          className='waves-effect green accent-3 waves-light btn-large'
        >
          <i className='fas fa-sign-out-alt'></i>{' '}
          <span className='hide-sm'>Check out</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <a
          href='/profiles'
          className='waves-effect green accent-3 waves-light btn-large'
        >
          <i className='fas fa-lightbulb'></i>{' '}
          <span className='hide-sm '>Thinkers</span>
        </a>
      </li>
      <li>
        <a
          href='/register'
          className='waves-effect green accent-3 waves-light btn-large'
        >
          <i className='fas fa-sign-in-alt'></i>{' '}
          <span className='hide-sm'>Register</span>
        </a>
      </li>
      <li>
        <a
          href='/login'
          className='waves-effect green accent-3 waves-light btn-large'
        >
          <i className='fas fa-sign-out-alt'></i>{' '}
          <span className='hide-sm'>Check in</span>
        </a>
      </li>
    </Fragment>
  );

  return (
    <nav className=' indigo'>
      <div className='nav-wraper container '>
        <a href='/' class='brand-logo  waves-effect waves-dark '>
          <img
            src={companylogo}
            alt='company logo'
            className='companylogo'
          ></img>
        </a>
        <a href='/' data-target='mobile-demo' class='sidenav-trigger'>
          <i class='material-icons'>menu</i>
        </a>

        <ul id='nav-mobile' class='right  hide-on-med-and-down'>
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </ul>

        <ul class='sidenav' id='mobile-demo'>
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
