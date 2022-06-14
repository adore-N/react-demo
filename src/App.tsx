import React from 'react';
import RouterApp from './router/index';
import { Loading, Mask } from 'antd-mobile'
import { connect } from 'react-redux';


function App({num}: any) {
  return (
    <div className='content'>
      <RouterApp />
    
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    num: state.loadingCounter.num
  }
}

export default connect(
  mapStateToProps
)(App);
