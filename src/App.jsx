import Sidebar from './components/Sidebar';
import Tasks from './components/Tasks';

import './index.css'

function App() {
  return (
    <div className='flex gap-9'>
      <div className="hidden lg:block md:block">
        <Sidebar />
      </div>
      <Tasks />
    </div>
  )
}

export default App;
