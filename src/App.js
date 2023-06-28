import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { UserProvider } from './context/UserContext'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../src/components/utils/theme'
import Navbar from './components/navbar/components/Navbar'
import Home from './components/home/components/Home'
import Sidebar from './components/sidebar/components/Sidebar'
import Favorites from './components/sidebar/components/Favorites'
import MyEvents from './components/sidebar/components/MyEvents'

const queryClient = new QueryClient()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <div className='App'>
            <Router>
              <Sidebar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/my-events' element={<MyEvents />} />
              </Routes>
            </Router>
          </div>
        </QueryClientProvider>
      </UserProvider>
    </ThemeProvider>
  )
}

export default App



