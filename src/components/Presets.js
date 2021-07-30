import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import classNames from 'classnames';

import Button from './ui/Button';

@inject('store')
@observer
export default class Presets extends Component {
  constructor(props) {
    super(props);

    this.usePresetFifteen = this.usePresetFifteen.bind(this);
    this.usePresetThirty = this.usePresetThirty.bind(this);
    this.usePresetFortyfive = this.usePresetFortyfive.bind(this);

    this.store = this.props.store;
  }

  usePresetFifteen() {
    console.log('Preset 15');

    this.store.appState.timerHours = 0;
    this.store.appState.timerMinutes = 15;
    this.store.appState.timerSeconds = 0;

    this.store.appState.presetSet = true;
    this.store.appState.presetFifteenSet = true;
    this.store.appState.presetFifteenSet = false;
    this.store.appState.presetFortyFiveSet = false;

    console.log(`seconds: ${this.store.appState.timerSeconds}, minutes: ${this.store.appState.timerMinutes}, hours: ${this.store.appState.timerHours}`);
  }

  usePresetThirty() {
    console.log('Preset 30');

    this.store.appState.timerHours = 0;
    this.store.appState.timerMinutes = 30;
    this.store.appState.timerSeconds = 0;

    this.store.appState.presetSet = true;
    this.store.appState.presetFifteenSet = false;
    this.store.appState.presetThirtySet = true;
    this.store.appState.presetFortyFiveSet = false;

    console.log(`seconds: ${this.store.appState.timerSeconds}, minutes: ${this.store.appState.timerMinutes}, hours: ${this.store.appState.timerHours}`);
  }

  usePresetFortyfive() {
    console.log('Preset 45');

    this.store.appState.timerHours = 0;
    this.store.appState.timerMinutes = 45;
    this.store.appState.timerSeconds = 0;

    this.store.appState.presetSet = true;
    this.store.appState.presetFifteenSet = false;
    this.store.appState.presetThirtySet = false;
    this.store.appState.presetFortyFiveSet = true;

    console.log(`seconds: ${this.store.appState.timerSeconds}, minutes: ${this.store.appState.timerMinutes}, hours: ${this.store.appState.timerHours}`);
  }

  render() {
    return (
      <div className='page presets'>
        <main className='main--centered'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 push-md-3'>
                <div className='presets__presets'>
                  <div className="icon icon--stopwatch"></div>

                  <h4 className='h4 text-center'>Presets to help you start</h4>

                  <p className='mt-4 mb-4 text-center'>Not sure how long should your meditation session be? No problem! Here are some presets to help you get started.</p>

                  <ul className='list-unstyled text--light'>
                    <li>
                      <Button className={classNames('preset', this.store.appState.presetFifteenSet && 'preset--active')} onClick={this.usePresetFifteen} title={<span>
                        <span className='preset__time'>15</span><span className='preset__unit'>mins</span></span>} />
                    </li>

                    <li>
                      <Button className={classNames('preset', this.store.appState.presetThirtySet && 'preset--active')} onClick={this.usePresetThirty} title={<span>
                        <span className='preset__time'>30</span><span className='preset__unit'>mins</span></span>} />
                    </li>

                    <li>
                      <Button className={classNames('preset', this.store.appState.presetFortyFiveSet && 'preset--active')} onClick={this.usePresetFortyfive} title={<span>
                        <span className='preset__time'>45</span><span className='preset__unit'>mins</span></span>} />
                    </li>
                  </ul>

                  <div className={classNames('mt-5 text-center', !this.store.appState.presetSet && 'hidden')}>
                    <Link className='btn btn--primary' to='/session'>Go to timer</Link> {/* for prodution use to='/labs/zentime/session' */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
