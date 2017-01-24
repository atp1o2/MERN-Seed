import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from '../../styles/App.css';

import Helmet from 'react-helmet';
// import DevTools from './components/DevTools';
import Header from './components/Header';
import Footer from './components/Footer';

// Import Actions
import { toggleAddPost } from './AppActions';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  toggleAddPostSection = () => {
    this.props.dispatch(toggleAddPost());
  };
  // Insert reflux devtools after the first <div>
  // {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
  render() {
    return (
      <div>
        <div>
          <Helmet
            title="MERN Starter - Blog App"
            titleTemplate="%s - Blog App"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <Header toggleAddPost={this.toggleAddPostSection} />
          <div className={styles.container}>
            {this.props.children}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    // intl: store.intl,
  };
}

export default connect(mapStateToProps)(App);
