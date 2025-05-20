import './App.css';
import VideoList from './components/VideoList';

const App = () => {
  return (
    <div className="App">
      <div className="text-2xl font-bold text-center p-4">Video Preview App</div>
      <VideoList />
    </div>
  );
}

export default App;
