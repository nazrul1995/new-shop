#!/bin/bash

# আগের src ফোল্ডার মুছে ফেলা (ঐচ্ছিক, যদি নতুন করে শুরু করতে চান)
# rm -rf src

# ফোল্ডার স্ট্রাকচার তৈরি
mkdir -p src/{assets/{images,icons,styles},components/{common,Header,Footer,ProductCard,CartItem,CategoryList,Slider},pages/{Home,Shop,ProductDetail,Cart,Checkout,Login,Register,Profile,About,Contact},routes,contexts,services,utils}

# ফাইল তৈরি
touch src/components/common/{Button.jsx,Input.jsx,Modal.jsx}
touch src/components/Header/Header.jsx
touch src/components/Footer/Footer.jsx
touch src/components/ProductCard/ProductCard.jsx
touch src/components/CartItem/CartItem.jsx
touch src/components/CategoryList/CategoryList.jsx
touch src/components/Slider/Slider.jsx
touch src/pages/Home/Home.jsx
touch src/pages/Shop/Shop.jsx
touch src/pages/ProductDetail/ProductDetail.jsx
touch src/pages/Cart/Cart.jsx
touch src/pages/Checkout/Checkout.jsx
touch src/pages/Login/Login.jsx
touch src/pages/Register/Register.jsx
touch src/pages/Profile/Profile.jsx
touch src/pages/About/About.jsx
touch src/pages/Contact/Contact.jsx
touch src/routes/AppRoutes.jsx
touch src/contexts/{CartContext.jsx,AuthContext.jsx}
touch src/services/api.js
touch src/utils/helpers.js
touch src/index.css
touch src/App.jsx

# প্রতিটি JSX ফাইলে ফাইলের নাম অনুযায়ী কন্টেন্ট যোগ করা
cat <<EOT > src/components/common/Button.jsx
import React from 'react';

const Button = () => {
  return (
    <div>
      this is Button
    </div>
  );
};

export default Button;
EOT

cat <<EOT > src/components/common/Input.jsx
import React from 'react';

const Input = () => {
  return (
    <div>
      this is Input
    </div>
  );
};

export default Input;
EOT

cat <<EOT > src/components/common/Modal.jsx
import React from 'react';

const Modal = () => {
  return (
    <div>
      this is Modal
    </div>
  );
};

export default Modal;
EOT

cat <<EOT > src/components/Header/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <div>
      this is Header
    </div>
  );
};

export default Header;
EOT

cat <<EOT > src/components/Footer/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <div>
      this is Footer
    </div>
  );
};

export default Footer;
EOT

cat <<EOT > src/components/ProductCard/ProductCard.jsx
import React from 'react';

const ProductCard = () => {
  return (
    <div>
      this is ProductCard
    </div>
  );
};

export default ProductCard;
EOT

cat <<EOT > src/components/CartItem/CartItem.jsx
import React from 'react';

const CartItem = () => {
  return (
    <div>
      this is CartItem
    </div>
  );
};

export default CartItem;
EOT

cat <<EOT > src/components/CategoryList/CategoryList.jsx
import React from 'react';

const CategoryList = () => {
  return (
    <div>
      this is CategoryList
    </div>
  );
};

export default CategoryList;
EOT

cat <<EOT > src/components/Slider/Slider.jsx
import React from 'react';

const Slider = () => {
  return (
    <div>
      this is Slider
    </div>
  );
};

export default Slider;
EOT

cat <<EOT > src/pages/Home/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div>
      this is Home
    </div>
  );
};

export default Home;
EOT

cat <<EOT > src/pages/Shop/Shop.jsx
import React from 'react';

const Shop = () => {
  return (
    <div>
      this is Shop
    </div>
  );
};

export default Shop;
EOT

cat <<EOT > src/pages/ProductDetail/ProductDetail.jsx
import React from 'react';

const ProductDetail = () => {
  return (
    <div>
      this is ProductDetail
    </div>
  );
};

export default ProductDetail;
EOT

cat <<EOT > src/pages/Cart/Cart.jsx
import React from 'react';

const Cart = () => {
  return (
    <div>
      this is Cart
    </div>
  );
};

export default Cart;
EOT

cat <<EOT > src/pages/Checkout/Checkout.jsx
import React from 'react';

const Checkout = () => {
  return (
    <div>
      this is Checkout
    </div>
  );
};

export default Checkout;
EOT

cat <<EOT > src/pages/Login/Login.jsx
import React from 'react';

const Login = () => {
  return (
    <div>
      this is Login
    </div>
  );
};

export default Login;
EOT

cat <<EOT > src/pages/Register/Register.jsx
import React from 'react';

const Register = () => {
  return (
    <div>
      this is Register
    </div>
  );
};

export default Register;
EOT

cat <<EOT > src/pages/Profile/Profile.jsx
import React from 'react';

const Profile = () => {
  return (
    <div>
      this is Profile
    </div>
  );
};

export default Profile;
EOT

cat <<EOT > src/pages/About/About.jsx
import React from 'react';

const About = () => {
  return (
    <div>
      this is About
    </div>
  );
};

export default About;
EOT

cat <<EOT > src/pages/Contact/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div>
      this is Contact
    </div>
  );
};

export default Contact;
EOT

cat <<EOT > src/routes/AppRoutes.jsx
import React from 'react';

const AppRoutes = () => {
  return (
    <div>
      this is AppRoutes
    </div>
  );
};

export default AppRoutes;
EOT

cat <<EOT > src/contexts/CartContext.jsx
import React from 'react';

const CartContext = () => {
  return (
    <div>
      this is CartContext
    </div>
  );
};

export default CartContext;
EOT

cat <<EOT > src/contexts/AuthContext.jsx
import React from 'react';

const AuthContext = () => {
  return (
    <div>
      this is AuthContext
    </div>
  );
};

export default AuthContext;
EOT

cat <<EOT > src/App.jsx
import React from 'react';

const App = () => {
  return (
    <div>
      this is App
    </div>
  );
};

export default App;
EOT

echo "ফোল্ডার স্ট্রাকচার এবং ফাইলগুলো সফলভাবে তৈরি হয়েছে!"