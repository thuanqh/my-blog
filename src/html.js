import React from "react"

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script
            dangerouslySetInnerHTML={{
                __html: `
                  document.addEventListener('DOMContentLoaded', () => {

                    // Get all "navbar-burger" elements
                    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
                  
                    // Check if there are any navbar burgers
                    if ($navbarBurgers.length > 0) {
                  
                      // Add a click event on each of them
                      $navbarBurgers.forEach( el => {
                        el.addEventListener('click', () => {
                  
                          // Get the target from the "data-target" attribute
                          const target = el.dataset.target;
                          const $target = document.getElementById(target);
                  
                          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                          el.classList.toggle('is-active');
                          $target.classList.toggle('is-active');
                  
                        });
                      });
                    }
                  
                  });
                  
                  
                  window.onscroll = () => {
                    const topnav = document.querySelector('#topnav');
                    if(this.scrollY <= 10) topnav.className='navbar is-transparent is-fixed-top'; else topnav.className='navbar is-fixed-top scroll';
                  };
                `,
            }}
            />
        </body>
      </html>
    )
  }
}
