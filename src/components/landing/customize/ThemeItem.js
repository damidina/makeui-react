import React from 'react';

const ThemeItem = (props) => {
  return (
    <div className="theme-item-container">
      <div className="icon-title-container">
        <img className="theme-icon" src={
            props.icon ? props.icon : "/images/theme-icon.svg"
          }
        />
        <div className="theme-info">
          <div className="theme-title">{props.title}</div>
          <p className="theme-author">
            {
              props.authorLink
                ? <a href={props.authorLink} target="_blank" rel="nofollow noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>By {props.author}</a>
                : `By: ${props.author}`
            }
          </p>
        </div>
      </div>
      <div className="theme-description">
        <p>{props.description}</p>
      </div>
      <div className="theme-info">
        <p>{props.components}</p>
        <p>{props.layouts}</p>
      </div>

      <a className="theme-button theme-button--left" href={props.previewLink} target="_blank" rel="nofollow noopener noreferrer" style={{ textDecoration: 'none', color: 'black'}}>
        <img className="theme-button--image" src="/images/tiny-preview-icon.svg" />Preview
      </a>
      <div
        onClick={() => props.onThemeSelect(props.value)}
        className={props.currentTheme === props.value ? "theme-button theme-button--right selected-theme" : "theme-button theme-button--right"}
      >
        {
          props.currentTheme === props.value
            ? <img className="theme-button--image" src="/images/tiny-selected-icon.svg" />
            : <img className="theme-button--image" src="/images/tiny-select-icon.svg" />

        }
        {props.currentTheme === props.value ? 'Selected!' : 'Select'}
      </div>
    </div>
  )
}

export default ThemeItem;
