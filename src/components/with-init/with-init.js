import React, { Component } from 'react';

export function withInit(init, callInitLogic, inProgressLogic, Spinner) {
	return BaseComponent =>
		class extends Component {
			static getDerivedStateFromProps(props, state) {
				const callInit = !!(
					callInitLogic &&
					(typeof callInitLogic === 'function'
						? callInitLogic(props)
						: callInitLogic)
				);
				const inProgress = !!(inProgressLogic &&
					(typeof inProgressLogic === 'function' ? inProgressLogic(props)	: inProgressLogic)
				);

				if (callInit && !inProgress) {
					if (init && typeof init === 'function') {
						init(props);
					}
				}

				if (inProgress || callInit) {
					if (!state.showSpinner) {
						return { showSpinner: true };
					}
				}

				if (!callInit && !inProgress && state.showSpinner) {
					return { showSpinner: false };
				}

				return null;
			}

			static displayName = `withInit(${BaseComponent.displayName || BaseComponent.name || 'Component'})`;

			constructor(props) {
				super(props);

				this.state = { showSpinner: !!Spinner };
			}

			render() {
				return this.state.showSpinner ? (
					<Spinner {...this.state} {...this.props} />
				) : (
					<BaseComponent {...this.state} {...this.props} />
				);
			}
		};
}