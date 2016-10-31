'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _constants = require('../../utilities/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /*
                                                                                                                                                                                                                             Copyright (c) 2015, salesforce.com, inc. All rights reserved.
                                                                                                                                                                                                                             
                                                                                                                                                                                                                             Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
                                                                                                                                                                                                                             Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
                                                                                                                                                                                                                             Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
                                                                                                                                                                                                                             Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
                                                                                                                                                                                                                             
                                                                                                                                                                                                                             THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                                                                                                                                                                                                                             */

// # Global Header Dropdown Component

// ## Dependencies

// ### React


// ### classNames
// [github.com/JedWatson/classnames](https://github.com/JedWatson/classnames)
// This project uses `classnames`, "a simple javascript utility for conditionally
// joining classNames together."


// ### Dropdown


// ### Children


/**
*  The Dropdown Button Trigger renders the default trigger button for the dropdown menu. If this component has children, it does not render itself to the DOM. Instead, it renders its child element, `Button`, and all that child's properties. This component may be used as a template to create custom triggers that do not use `Button`.
*/
var GlobalHeaderDropdownTrigger = _react2.default.createClass({
	// TODO: Make this a stateless component, however dropdowns break when this component becomes stateless.

	// ### Display Name
	// Always use the canonical component name (set in the core) as the React
	// display name.
	displayName: _constants.MENU_DROPDOWN_TRIGGER,

	// ### Prop Types
	propTypes: {
		/**
   * An image URL to display for the user profile.
   */
		avatar: _react.PropTypes.string,
		/**
   * CSS classes to be added to `li` element.
   */
		className: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object, _react.PropTypes.string]),
		/**
  * A unique ID is needed in order to support keyboard navigation, ARIA support, and connect the dropdown to the triggering button.
  */
		id: _react.PropTypes.string,
		/**
   * Informs the trigger on the open/close state of the dropdown menu
   */
		isOpen: _react.PropTypes.bool,
		/**
  * Adds custom styling such as inverse fill and special sizing/spacing
  */
		globalAction: _react.PropTypes.bool,
		/**
   * The dropdown menu.
   */
		menu: _react.PropTypes.node,
		/**
   * Is only called when `openOn` is set to `hover` and when the triggering li loses focus.
   */
		onBlur: _react.PropTypes.func,
		/**
   * This prop is passed onto the triggering `li`. Triggered when the trigger li is clicked.
   */
		onClick: _react.PropTypes.func,
		/**
   * Is only called when `openOn` is set to `hover` and when the triggering li gains focus.
   */
		onFocus: _react.PropTypes.func,
		/**
   * Called when a key pressed.
   */
		onKeyDown: _react.PropTypes.func,
		/**
   * Called when mouse clicks down on the trigger li.
   */
		onMouseDown: _react.PropTypes.func,
		/**
   * Called when mouse hovers over the trigger `li`.
   */
		onMouseEnter: _react.PropTypes.func,
		/**
   * Called when mouse leaves trigger `li` or the menu.
   */
		onMouseLeave: _react.PropTypes.func,
		/**
   * Determines if mouse hover or click opens the dropdown menu. The default of `click` is highly recommended to comply with accessibility standards. If you are planning on using hover, please pause a moment and reconsider.
   */
		openOn: _react.PropTypes.oneOf(['hover', 'click', 'hybrid']),
		/**
   * Set to true if menu is inline and relatively positioned with CSS. This is the typical use case for menus with nubbins.
   */
		positioned: _react.PropTypes.bool,
		/**
   * The ref of the actual triggering button.
   */
		triggerRef: _react.PropTypes.func
	},

	// ### Render
	render: function render() {
		// The following props are provided to the `li`, all others are passed into the `Button`
		var _props = this.props,
		    avatar = _props.avatar,
		    className = _props.className,
		    id = _props.id,
		    isOpen = _props.isOpen,
		    globalAction = _props.globalAction,
		    menu = _props.menu,
		    onBlur = _props.onBlur,
		    onClick = _props.onClick,
		    onFocus = _props.onFocus,
		    onKeyDown = _props.onKeyDown,
		    onMouseDown = _props.onMouseDown,
		    onMouseEnter = _props.onMouseEnter,
		    onMouseLeave = _props.onMouseLeave,
		    triggerRef = _props.triggerRef,
		    rest = _objectWithoutProperties(_props, ['avatar', 'className', 'id', 'isOpen', 'globalAction', 'menu', 'onBlur', 'onClick', 'onFocus', 'onKeyDown', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'triggerRef']);

		// TODO: Add avatar component for use across multiple components


		return _react2.default.createElement(
			'li',
			{
				'aria-haspopup': 'true',
				className: (0, _classnames2.default)('slds-dropdown-trigger slds-dropdown-trigger--click', {
					'slds-is-open': isOpen,
					'slds-p-around--xx-small': globalAction
				}, className),
				id: id,
				onBlur: onBlur,
				onClick: onClick,
				onFocus: onFocus,
				onKeyDown: onKeyDown,
				onMouseDown: onMouseDown,
				onMouseEnter: onMouseEnter,
				onMouseLeave: onMouseLeave,
				ref: triggerRef
			},
			_react2.default.createElement(
				_button2.default,
				_extends({
					className: (0, _classnames2.default)({ 'slds-global-header__button--icon-actions': globalAction }),
					iconClassName: (0, _classnames2.default)({ 'slds-global-header__icon-actions': globalAction }),
					'aria-haspopup': 'true'
				}, rest),
				avatar ? _react2.default.createElement(
					'span',
					{ className: 'slds-avatar slds-avatar--circle slds-avatar--medium' },
					_react2.default.createElement('img', { src: avatar, alt: '' })
				) : null
			),
			menu
		);
	}
});

module.exports = GlobalHeaderDropdownTrigger;