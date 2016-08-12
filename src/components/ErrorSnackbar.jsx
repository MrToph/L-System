import React from 'react';
import { connect } from 'react-redux';
import { Snackbar } from 'material-ui';

class ErrorSnackbar extends React.Component {
  constructor (props) {
    super(props);
    // as time of this writing there is no way to change the (content)Style of the child yet, see https://github.com/callemall/material-ui/issues/3190
    // also no multiline support yet https://github.com/callemall/material-ui/issues/3860
    this.style = {color: 'red'};
  }

  shortenedMessage () {
	let s = this.props.message;
	let maxLength = 60;
	if(s.length < maxLength) return s;
	else return s.substr(0, maxLength) + ' ...';
  }

  render () {
    return (
    <Snackbar message={this.shortenedMessage()} action='what' open={this.props.message !== ''} onActionTouchTap={() => alert(this.props.message)}style={this.style} />
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.snackbar.text
  };
};

export default connect(mapStateToProps)(ErrorSnackbar);
