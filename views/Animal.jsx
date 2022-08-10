const React = require("react");

class Animal extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <title>Categories</title>
          <link rel="stylesheet" href="./css/style.css" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
            crossOrigin="anonymous"
          ></link>
        </head>
        <body>
          <div>
            <h1>Categories</h1>
            <ul>
              {this.props.items.map((item, index) => {
                return (
                  <li>
                    <br />
                    <a
                      href={`/${item.animal}/${item.category}`}
                      className="btn btn-primary"
                    >
                      {item.category}
                    </a>
                    <br />
                  </li>
                );
              })}
            </ul>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Animal;
