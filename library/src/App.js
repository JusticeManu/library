const { Button } = require("antd");
const { default: MainNavigator } = require("./navigator/MainNavigator");

function App() {
  return (
    <div className='App'>
      <MainNavigator />
    </div>
  );
}

export default App;
