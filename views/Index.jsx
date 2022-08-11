const React = require("react");

class Index extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <html lang="en">
        <head>
          <title>Quality Pets</title>
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
            <h1>All Items</h1>
            <ul>
              {items.map((item, index) => {
                return (
                  <li>
                    <a href={`/items/${item.id}`} className="btn btn-primary">
                      {item.name}
                    </a>
                    <br />
                    <a href={`/items/${item.id}`}>
                      <img src={`${item.img}`} alt="" height={200} />
                    </a>
                  </li>
                );
              })}
            </ul>
            <a href="/items/new" className="btn btn-success">
              Add a New Item
            </a>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Index;
