import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from 'src/components/input';
import style from '../sign-up/style.css'
import * as Actions from './actions';

class SignIn extends Component {
  static propTypes = {
    dataForm: PropTypes.object.isRequired,
    changeFieldAction: PropTypes.func.isRequired,
  };

  onSubmit = () => {
    const { dataForm } = this.props; 
    this.props.signInAction(dataForm);
  }

  render() {
    const { errors } = this.props;
    return (
      <div className={style.signUpWrapper}>
        <div className={style.signUpRow}>
          <div>
            <Input
              placeholder={'Login'}
              id="login"
              value={this.props.dataForm.login}
              onChange={this.props.changeFieldAction}
              error={errors}
            />
          </div>
        </div>
        <div className={style.signUpRow}>
          <div>
            <Input
              placeholder={'Password'}
              id="password"
              value={this.props.dataForm.password}
              onChange={this.props.changeFieldAction}
              error={errors}
            />
          </div>
        </div>
        <button className={style.submit} onClick={this.onSubmit}>Login</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dataForm: state.signIn.dataForm,
  errors: state.signIn.errors
});

export default connect(mapStateToProps, Actions)(SignIn);
