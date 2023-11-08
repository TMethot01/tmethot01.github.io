const initialText = "# Write your Markdown here \n## you can write whatever you want \n ### you can even write smaller\n we can even write code! `<span></span>` or write it in a code block \n\n ```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n }\n}\n```\n\n We can make the text **BOLD** or _italic_ or **_both_** as well as having ~~strikethrough~~. [Links](links) and \n> Block Quotes! also appear\n\n- as well as lists\n\n Finally we can't forget images and a huge thanks to freeCodeCamp!![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)";

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: initialText,

      parsed: marked.parse(initialText) };

    this.parse = this.parse.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  parse() {
    this.setState(state => ({
      input: state.input,
      parsed: marked.parse(state.input) }));

  }

  handleChange(event) {
    this.setState(state => ({
      input: event.target.value,
      parsed: marked.parse(event.target.value) }));

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "wrapper", class: "container-fluid" }, /*#__PURE__*/
      React.createElement("h1", { class: "title text-center" }, "TM Markdown Previewer"), /*#__PURE__*/
      React.createElement("h2", { class: "subtitle" }, "Editor"), /*#__PURE__*/
      React.createElement("div", { id: "editor-area", class: "text-center" }, /*#__PURE__*/
      React.createElement("textarea", {
        id: "editor",
        onChange: this.handleChange,
        value: this.state.input,
        placeholder: "Write your Markdown here",
        class: "w-75",
        rows: "10" })), /*#__PURE__*/


      React.createElement("h2", { class: "subtitle" }, "Preview"), /*#__PURE__*/
      React.createElement("div", { id: "preview-area", class: "w-75 d-flex justify-content-center mx-auto" }, /*#__PURE__*/
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: this.state.parsed } }))));



  }}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(MarkdownPreviewer, null));