import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Mycontext } from './Context/Context'
import { useState } from 'react';

import LoginSignupPage from './Pages/LoginSignup-Page';
import MainMenu from './Pages/MainMenu';
import Cart from './Pages/Cart';
import Voucher from './Pages/Voucher';
import Drinks from './Pages/Drinks';
import Desert from './Pages/Desert';
import Header from './Components/Header/Header'
import vouchers from './Components/Vouchers';

function App() {

  const [checker, setchecker] = useState('reymark')
  let [cart, setCart] = useState([])
  const [total, setTotal] = useState([])
  const [paymentCheck, setPaymentCheck] = useState(false)
  const [voucherCheck, setVoucherCheck] = useState(false)
  const [VouchersClaimed, setVouchersClaimed] = useState(vouchers)
  const [VoucherAvail, setVoucherAvail] = useState([])
  const [totalAmount, setTotalAmount] = useState(0);
  // const [user,setUser] =useState({})

  // function handleCallbackResponse(response) {
  //   console.log("Encoded JWT ID token: " + response.credential);
  //   const userObject = jwtDecode(response.credential);
  //   console.log(userObject);
  //   setUser(userObject)
  // }

  // useEffect(() => {
  //   /* global google */
  //   google.accounts.id.initialize({
  //     client_id: "6696019446-cqn77o3s8nrfbcshfv88lmuhacl0u9jn.apps.googleusercontent.com",
  //     callback: handleCallbackResponse
  //   });

  //   google.accounts.id.renderButton(
  //     document.getElementById("signInDiv"),
  //     { theme: "outline", size: "large" }
  //   );
  // }, []);

  return (

    <div className="App">

      {/* <div id="signInDiv"></div>
      {user && 
      <div>
        <img src={user.picture} alt='sd' />
        <p>{user.name}</p>
      </div>} */}

      <Mycontext.Provider value={{ setchecker, checker, cart, setCart, total, setTotal, paymentCheck, setPaymentCheck, VouchersClaimed, setVouchersClaimed, VoucherAvail, setVoucherAvail, voucherCheck, setVoucherCheck, totalAmount, setTotalAmount }}>

        <BrowserRouter>

          <Header />
          <Routes>

            <Route index element={<LoginSignupPage />} />
            <Route path='/mainMenu' element={<MainMenu />} />
            <Route path='/desert' element={<Desert />} />
            <Route path='/drinks' element={<Drinks />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/voucher' element={<Voucher />} />

          </Routes>

        </BrowserRouter>
      </Mycontext.Provider>


    </div>
  );
}

export default App;
