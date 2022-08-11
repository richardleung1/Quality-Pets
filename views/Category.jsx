const React = require("react");

class Category extends React.Component {
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
            <h1>
              {items[0].animal} {items[0].category}
            </h1>
            <ul>
              {items.map((item, index) => {
                return (
                  <li>
                    <a href={`/items/${item.id}`} className="btn btn-primary">
                      {item.name}
                    </a>
                    <br />
                    <img src={`${item.img}`} alt="" height={200} />
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

module.exports = Category;
