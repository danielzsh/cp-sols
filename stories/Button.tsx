import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';
import { MouseEventHandler } from 'react';

/**
 * Primary UI component for user interaction
 */
interface paramTypes {
  label: string,
  primary?: boolean,
  backgroundColor?: string,
  size?: "small" | "medium" | "large",
  onClick?: MouseEventHandler<HTMLButtonElement>
}
export const Button = ({ label, primary, backgroundColor, size, onClick, ...props } : paramTypes) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  size = size || "medium";
  primary = primary || true;
  return (
    <button
      type="button"
      className={[styles[`storybook-button`], styles[`storybook-button--${size}`], styles[mode]].join(' ')}
      style={backgroundColor && { backgroundColor }}
      onClick={(onClick == undefined) ? () => {} : onClick}
      {...props}
    >
      {label}
    </button>
  );
};