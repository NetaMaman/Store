
// import { CartProvider, useCart } from "react-use-cart";

// function Page() {
//     const { addItem } = useCart();
  
//     const products = [
//       {
//         id: 1,
//         name: "Malm",
//         price: 9900,
//         quantity: 1
//       },
//       {
//         id: 2,
//         name: "Nordli",
//         price: 16500,
//         quantity: 5
//       },
//       {
//         id: 3,
//         name: "Kullen",
//         price: 4500,
//         quantity: 1
//       },
//     ];
  
//     return (
//       <div>
//         {products.map((p) => (
//           <div key={p.id}>
//             <button onClick={() => addItem(p)}>Add to cart</button>
//           </div>
//         ))}
//       </div>
//     );
//   }

// function Cart() {
//     const {
//       isEmpty,
//       totalUniqueItems,
//       items,
//       updateItemQuantity,
//       removeItem,
//     } = useCart();
  
//     if (isEmpty) return <p>Your cart is empty</p>;
  
//     return (
//       <>
//         <h1>Cart ({totalUniqueItems})</h1>
  
//         <ul>
//           {items.map((item) => (
//             <li key={item.id}>
//               {item.quantity} x {item.name} &mdash;
//               <button
//                 onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
//               >
//                 -
//               </button>
//               <button
//                 onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
//               >
//                 +
//               </button>
//               <button onClick={() => removeItem(item.id)}>&times;</button>
//             </li>
//           ))}
//         </ul>
//       </>
//     );
//   }
  


// function PopupCart() {
//     return (
//       <CartProvider>
//         <Page />
//         <Cart />
//       </CartProvider>
//     );
//   }

//   export default PopupCart;

import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import * as Icons from 'react-icons/fa';


export default function PopupCart() {
  const [state, setState] = React.useState({
    // top: false,
    // left: false,
    // bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 500 }}
      role="presentation"
    //   onClick={toggleDrawer(anchor, false)}
    //   onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}

      <Button>Add to cart</Button>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button 
           onClick={toggleDrawer(anchor, true)}><Icons.FaCartPlus/></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
