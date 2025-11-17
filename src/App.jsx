import Sidebar from './components/Sidebar';
import Tasks from './components/Tasks';
import { Toaster } from 'sonner'
import './index.css'

/**
 * Página main
 * @returns 
 */

function App() {
  return (
    <div className='flex gap-9'>
      <div className="hidden lg:block md:block">
        <Sidebar />
      </div>
      <Toaster position="top-right" richColors />
      <Tasks />
    </div>
  )
}

export default App;
