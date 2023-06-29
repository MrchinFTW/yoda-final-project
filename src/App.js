import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { UserProvider } from './context/UserContext'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../src/components/utils/theme'
import Navbar from './components/navbar/components/Navbar'
import Home from './components/home/components/Home'
import Sidebar from './components/sidebar/components/Sidebar'
import Favorites from './components/sidebar/components/Favorites'
import MyEvents from './components/sidebar/components/MyEvents'
import SingleEvent from './components/singleEvent/components/SingleEvent'
import { CssBaseline } from '@mui/material'

const queryClient = new QueryClient()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <div className='app'>
            <Router>
              <Sidebar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/my-events' element={<MyEvents />} />
                <Route path='/events/:id' element={<SingleEvent />} />
              </Routes>
            </Router>
          </div>
        </QueryClientProvider>
      </UserProvider>
    </ThemeProvider>
  )
}

export default App



