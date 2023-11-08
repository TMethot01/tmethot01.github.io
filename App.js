export default function App() {
  return (
    <>
      <h1>Hey World</h1>
      <Home />
    </>
  );
}

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "hey",
    };
  }

  render() {
    return (
      <div id="wrapper" className="wrap">
        <div>
          <h1>Heyaskdjgkajbkjc kja jalgjabdlkjbak sddkj fq</h1>
        </div>
        <div>
          <nav className="navbar">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/markdown_previewer/markdown"></a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  };
}
