import React from 'react';
import cx from 'classnames';

const DEPLOYMENT_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 50 50">
    <path d="M 35.34375 -0.09375 C 31.92175 -0.09375 28.7935 1.82125 27.1875 4.78125 C 26.4305 4.35225 25.55025 4.125 24.65625 4.125 C 22.03025 4.125 19.87075 6.10225 19.59375 8.65625 C 18.79175 8.97525 18.08375 9.46125 17.46875 10.03125 C 17.42775 10.02625 17.38575 10 17.34375 10 L 7.6875 10 C 6.7755 10 5.9525 10.69025 5.8125 11.53125 L 0.875 32.1875 C 1.233 32.0815 1.608 32 2 32 L 48 32 C 48.38 32 48.74575 32.05725 49.09375 32.15625 L 46.5 21.3125 C 47.098 21.0105 47.637 20.613 48.125 20.125 C 49.331 18.918 50 17.30075 50 15.59375 C 50 12.42875 47.677 9.8165 44.625 9.3125 C 44.626 9.2745 44.625 9.2255 44.625 9.1875 C 44.625 4.0635 40.46775 -0.09375 35.34375 -0.09375 z M 35.34375 1.90625 C 39.36475 1.90625 42.625 5.1655 42.625 9.1875 C 42.625 9.4955 42.5995 9.79675 42.5625 10.09375 L 42.46875 11.21875 L 43.59375 11.21875 C 46.01675 11.21875 48 13.17075 48 15.59375 C 48 16.76675 47.54775 17.88975 46.71875 18.71875 C 45.88975 19.54775 44.797 20 43.625 20 L 22.15625 20 C 19.44425 20 17.25 17.80475 17.25 15.09375 C 17.25 12.89275 18.71875 10.93075 20.84375 10.34375 L 21.59375 10.125 L 21.5625 9.21875 C 21.5625 7.50875 22.94625 6.125 24.65625 6.125 C 25.48625 6.125 26.289 6.44425 26.875 7.03125 L 27.96875 8.125 L 28.5 6.65625 C 29.556 3.80425 32.31175 1.90625 35.34375 1.90625 z M 2 34 C 0.897 34 0 34.897 0 36 L 0 48 C 0 49.103 0.897 50 2 50 L 48 50 C 49.103 50 50 49.103 50 48 L 50 36 C 50 34.897 49.103 34 48 34 L 2 34 z M 40 40 C 41.105 40 42 40.896 42 42 C 42 43.104 41.105 44 40 44 C 38.895 44 38 43.104 38 42 C 38 40.896 38.895 40 40 40 z"></path>
  </svg>
);

const Deployment = (props) => {
  let description;

  switch (props.deployment) {
    case 'heroku':
      description = (
        <div>
          <strong><a href="https://www.heroku.com/" target="_blank">Heroku</a></strong> — Free Tier. 512MB RAM, 1 web/1 worker, sleeps after 30 min of inactivity, must sleep 6 hours in a 24 hour period. No credit card required.
        </div>
      );
      break;
    case 'azure':
      description = (
        <div>
          <strong><a href="https://azure.microsoft.com/en-us/pricing/free-trial/" target="_blank">Microsoft Azure</a></strong> — Free one-month trial. Sign up for free and get $200 to spend on all Azure services.
        </div>
      );
      break;
    case 'bluemix':
      description = (
        <div>
          <strong><a href="https://console.ng.bluemix.net/" target="_blank">IBM Bluemix</a></strong> — Free Tier. 512BM RAM, 2 Public IP Addresses, 20 GB External Storage. No credit card required.
        </div>
      );
      break;
    case 'digitalOcean':
      description = (
        <div>
          <strong><a href="https://www.digitalocean.com/" target="_blank">Digital Ocean</a></strong> — Starts at $5/month. 512MB RAM, 1 Core Processor, 20GB SSD Disk, 1TB Transfer. <a href="https://m.do.co/c/31bf8418522c">Referral Link</a> — $10 credit bonus.
        </div>
      );
      break;
    default:
      description = <div className="placeholder"> </div>;
  }

  return (
    <div className={cx('zoomInBackwards panel', props.deployment)}>
      <div className="panel-heading">
        <h6>{DEPLOYMENT_SVG}{!props.deployment || props.deployment === 'none' ? 'Deployment' : props.deployment}</h6>
      </div>
      <div className="panel-body">
        {description}
        <div className="radio-group">
          <label className="radio-inline">
            <img className="btn-logo" src="/img/svg/none.png" alt="None" />
            <input type="radio" name="deploymentRadios" value="none" onChange={props.handleChange} checked={props.deployment === 'none'} />
            <span>None</span>
          </label>
          <label className="radio-inline">
            <img className="btn-logo" src="/img/svg/heroku-logo.svg" height="60" alt="Heroku"/>
            <input type="radio" name="deploymentRadios" value="heroku" onChange={props.handleChange} checked={props.deployment === 'heroku'} />
            <span>Heroku</span>
          </label>
          <label className="radio-inline">
            <img className="btn-logo" src="/img/svg/azure-logo.svg" height="60" alt="Microsoft Azure"/>
            <input type="radio" name="deploymentRadios" value="azure" onChange={props.handleChange} checked={props.deployment === 'azure'} />
            <span>Azure</span>
          </label>
          <label className="radio-inline">
            <img className="btn-logo" src="/img/svg/bluemix-logo.svg" alt="IBM Bluemix"/>
            <input type="radio" name="deploymentRadios" value="bluemix" onChange={props.handleChange} checked={props.deployment === 'bluemix'} />
            <span>Bluemix</span>
          </label>
          <label className="radio-inline">
            <img className="btn-logo" src="/img/svg/do-logo.png" alt="Digital Ocean"/>
            <input type="radio" name="deploymentRadios" value="digitalOcean" onChange={props.handleChange} checked={props.deployment === 'digitalOcean'} />
            <span>Digital Ocean</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Deployment;
