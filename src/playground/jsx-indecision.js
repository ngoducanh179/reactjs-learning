console.log('App.js is running')

// create app object title/subtitle
// JSX-Javascript XML

const app = {
  title: 'learning react',
  subtitle: 'hackathon',
  options: []
}
const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render()

  }
}

const remove = () => {
  app.options = []
  render()
}
const MakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length)
  const option = app.options[randomNum]
  alert(option)
}




const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length > 0 ? 'here are your option' : 'No options'}
      <p>{app.options.length}</p>
      <button disabled={app.options.length === 0} onClick={MakeDecision}>What Should I Do?</button>
      <button onClick={remove}>remove add</button>
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>{option}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>add option</button>
      </form>
    </div >
  );
  ReactDOM.render(template, appRoot)
}
render()