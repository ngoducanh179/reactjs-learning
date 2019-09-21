const appRoot = document.getElementById('app');
const app = {
  title: 'visibility',
  buttonShow: 'Show detail',
  hidebutton: 'hide button',
  hello: 'Hey,These are some details you can now see',
  disable: false
}
const show = () => {
  app.disable = !app.disable
  render()
}

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={show}>{app.disable ? app.hidebutton : app.buttonShow}</button>
      {app.disable && (
        <div>
          <p>{app.hello}</p>
        </div>
      )}
    </div>
  )
  ReactDOM.render(template, appRoot)
}
render()