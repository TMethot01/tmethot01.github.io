export default function App() {
  return (
    <div>
      <h1>Hey World</h1>
      <Home />
    </div>
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
      </div>
    );
  };
}
