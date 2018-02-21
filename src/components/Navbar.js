import React from 'react';

const Navbar = (props) => {
  return (<div className="navbar">
    <select id="age" className="navbar-only-input" onChange={props.changeLanguage} value={props.chosen}>
      <option value="en">
        English</option>
      <option value="ar">العربية
      </option>
    </select>
    <div className="fb-share-button"
  data-href="https://www.your-domain.com/your-page.html"
  data-layout="button_count">
</div>

  </div>);
}

export default Navbar;
