import ProfilePhoto from './Component/Profile/ProfilePhoto.js'
import Address from './Component/Profile/Address.js'
import FullName from './Component/Profile/FullName.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <ProfilePhoto></ProfilePhoto>
      <FullName></FullName>
      <Address></Address>
    </div>
  );
}

export default App;
