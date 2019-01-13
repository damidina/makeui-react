import React from 'react';

const ThemeItem = (props) => {
  return (
    <div className="theme-item-container">
      <div className="icon-title-container">
        <img className="theme-icon" src={
            props.icon ? props.icon : "/images/theme-icon.svg"
          }
        />
        <div>
          <div className="theme-title">{props.title}</div>
        </div>
      </div>
      <div className="theme-description">
        <p>{props.description}</p>
        <p className="theme-author">
          {
            props.authorLink
              ? <a href={props.authorLink} target="_blank" rel="nofollow noopener noreferrer" style={{ textDecoration: 'none' }}>By: {props.author}</a>
              : `By: ${props.author}`
          }
        </p>
      </div>
      <div className="theme-info">
        <p>{props.components}</p>
        <p>{props.layouts}</p>
      </div>
      <button className="theme-button theme-button--left">
        <img className="theme-button--image" src="/images/tiny-preview-icon.svg" />Preview
      </button>
      <button
        value={props.value}
        onClick={props.onThemeSelect}
        className={props.currentTheme === props.value ? "theme-button theme-button--right selected-theme" : "theme-button theme-button--right"}
      >
        {
          props.currentTheme === props.value
            ? <img className="theme-button--image" src="/images/tiny-selected-icon.svg" />
            : <img className="theme-button--image" src="/images/tiny-select-icon.svg" />

        }
        {props.currentTheme === props.value ? 'Selected!' : 'Select'}
      </button>
    </div>
  )
}

export default ThemeItem;