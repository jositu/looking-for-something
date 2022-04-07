function Something(props) {
  return (
      <a className="lil-something" href={props.url} target="_blank">
          {props.title}
          {/* <p>little description here hehe</p> */}
      </a>
  );
}

function Header() {
  return (
    <header>
      <h1>i am looking for something</h1>
    </header>
  );
}

function MainContent() {
  return (
    <div className="main-content">
      {/* TODO: make this into a list */}
      <Something title="react-icons" url="https://react-icons.github.io/react-icons" />
      <Something title="Flexbox Guide" url="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" />
      <Something title="Grid Guide" url="https://css-tricks.com/snippets/css/complete-guide-grid/" />
      <Something title="CSS Functions Guide" url="https://css-tricks.com/complete-guide-to-css-functions/" />
      <Something title="Data Attributes Guide" url="https://css-tricks.com/a-complete-guide-to-data-attributes/" />
      <Something title="calc() in CSS Guide" url="https://css-tricks.com/a-complete-guide-to-calc-in-css/" />
      <Something title="Create React App" url="https://create-react-app.dev" />
      <Something title="react router" url="https://v5.reactrouter.com/web/guides/quick-start" />
      <Something title="React Bootstrap" url="https://react-bootstrap.github.io" />
      <Something title="ReactJS Docs" url="https://reactjs.org/docs/getting-started.html" />
      <Something title="W3 Tutorials" url="https://www.w3schools.com/howto/default.asp" />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);