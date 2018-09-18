import React from 'react';
import { FormControl, InputLabel, Input, InputAdornment, IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';

export default class SearchHeader extends React.Component {
  state = {
    search: '',
  };
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleMouseDownPassword = e => {
    e.preventDefault();
  };

  handleClickShowPassword = () => {
    this.props.history.push({
      pathname: '/search',
      search: `q=${this.state.search}`,
      state: {
        instant: true,
      }
    });
  };
  sendOnEnter = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      this.handleClickShowPassword();
    }
  }
  render() {
    return (<FormControl>
      <InputLabel style={{ color: 'white' }} htmlFor="adornment-search">Encontre o pesquisador</InputLabel>
      <Input
        id="adornment-search"
        type="text"
        value={this.state.search}
        onChange={this.handleChange('search')}
        style={{ color: '#f5deb3' }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="Toggle search"
              onClick={this.handleClickShowPassword}
              onMouseDown={this.handleMouseDownPassword}
              style={{ color: 'white' }}
            >
              <Search />
            </IconButton>
          </InputAdornment>
        }
        onKeyDown={this.sendOnEnter}
      />
    </FormControl>);
  }
}
