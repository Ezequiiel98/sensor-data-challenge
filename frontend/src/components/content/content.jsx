import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './../../config/page-route.jsx';
import { PageSettings } from './../../config/page-settings.js';

function setTitle(path, routeArray) {
	var pageTitle;
	for (var i=0; i < routeArray.length; i++) {
		if (routeArray[i].path === path) {
			pageTitle = 'Color Admin | ' + routeArray[i].title;
		}
	}
	document.title = (pageTitle) ? pageTitle : 'Color Admin | React App';
}

class Content extends React.Component {
	componentDidMount() {
		setTitle(this.props.history.location.pathname, routes);
	}
	componentWillMount() {
    this.props.history.listen(() => {
			setTitle(this.props.history.location.pathname, routes);
    });
  }
  
	render() {
		return (
    <Switch>
      <PageSettings.Consumer>
      {({pageContentFullWidth, pageContentClass, pageContentInverseMode}) => (
      	<div>
      	  <div className={'content ' + (pageContentFullWidth ? 'content-full-width ' : '') + (pageContentInverseMode ? 'content-inverse-mode ' : '') + pageContentClass}>
      	  	{routes.map((route, index) => (
      	  		<Route
      	  			key={index}
      	  			path={route.path}
      	  			exact={route.exact}
      	  			component={route.component}
      	  		/>
      	           ))}
      	  </div>
      	  <Route path="/login" component={() => <h1>Login</h1>} />
      	</div>
      )
      }

    </PageSettings.Consumer>
  </Switch>
    )
    }
}

export default Content;
