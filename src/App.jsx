import { lazy, Suspense} from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SimpleBackdrop from "./components/Spinner.jsx";
import UsersContextProvider from "./contexts/usersContextProvider.jsx";
import UsersModule from "./pages/UsersModule.jsx";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./redux/store/store.js";
const Home = lazy(() => import("./pages/Home"));
const ABOUT = lazy(() => import("./pages/About.jsx"));
const UsersPage = lazy(() => import("./pages/Users.jsx"));
const AddUsers = lazy(() => import("./pages/AddUsers.jsx"));
const Error = lazy(() => import("./pages/Error.jsx"));
const UserDetails = lazy(() => import("./pages/UserDetails.jsx"));

function App() {
  const fetcher= async()=>{
  console.log("hiii")
    const res=await axios.get("https://jsonplaceholder.typicode.com/users")
  return res.data
  }
  const router = createBrowserRouter([
    { path: "/", element: <Home></Home> 
      ,children:[
        {
          path: "users",element:<UsersModule/> , errorElement:<Error></Error>,
          children:[
            {index:true ,element:<UsersPage></UsersPage> 
              // ,loader:fetcher
            },
            {path:"add" ,element:<AddUsers></AddUsers>},
            {
              path:":userId" ,element:<UserDetails></UserDetails>
            }
          ]
        },
        {
          path:"about" ,element:<ABOUT></ABOUT>
        },
       
      ]
    },
    
  ]);
  return (
    <>
    <Provider store={store}>
      <UsersContextProvider>
        <Suspense fallback={<SimpleBackdrop></SimpleBackdrop>}>
          <RouterProvider router={router}></RouterProvider>
        </Suspense>
      </UsersContextProvider>
      </Provider>
    </>
  );
}

export default App;

          {/* <BrowserRouter>
  <NavBar></NavBar>
  <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/about" element={<ABOUT></ABOUT>}></Route>
    <Route path="/users" element={<UsersModule/>}>
          <Route index element={<UsersPage  />}></Route>
          <Route path="add" element={<AddUsers  />}></Route>
    </Route>
   
    <Route path="/users/:userId" element={<UserDetails/>}></Route>
    <Route path="*" element={<Error></Error>}></Route>
  </Routes>
  </BrowserRouter> */}