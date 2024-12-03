'use client';
import { useEffect, useState } from 'react';

interface CartItem {
    image: string; // URL for the image
    name: string;  // Name of the product
    price: number; // Price of the product
    quantity: number; // Quantity of the product
    selectedColor: string;
  }

const CheckoutPage = () => {
const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState({
    country: 'Canada',
    firstName: '',
    lastName: '',
    company: '',
    address: '',
    apartment: '',
    city: '',
    province: '',
    postalCode: '',
    phone: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [shipping, setShipping] = useState(0);
  const [tax, setTax] = useState(0);
  const selectedStore = document.cookie.split('; ').find(row => row.startsWith('selectedStore='))?.split('=')[1] || 'TN';

  useEffect(() => {
    // Retrieve cart items from localStorage
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
        const parsedItems: CartItem[] = JSON.parse(storedItems);
      setCartItems(parsedItems);

      // Calculate total price
      const subtotal  = parsedItems.reduce(
        (sum: any, item: any) => sum + item.price * item.quantity,
        0
      );
      setTotalPrice(subtotal );

      // Calculate shipping (free if subtotal > 99)
      const calculatedShipping = subtotal > 99 ? 0 : 10; // Flat $10 shipping fee
      setShipping(calculatedShipping);

      // Calculate tax if the selected store is CA
      const calculatedTax = selectedStore === 'CA' ? subtotal * 0.15 : 0;
      setTax(calculatedTax);
    }
  }, [selectedStore]);

  const grandTotal = totalPrice + shipping + tax;
  console.log('cartItems', cartItems)

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayNow = () => {
    // Implement payment logic here
    alert('Payment processed successfully!');
  };

  return (
    <div className="bg-[#F4EEE1] min-h-screen p-6 mt-[70px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side - Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h1>

          {/* Contact Section */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email or Mobile Phone Number
            </label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Enter a valid email or phone number"
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#ffd500] p-3"
            />
          </div>

          {/* Delivery Section */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Delivery</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={address.firstName}
                onChange={handleAddressChange}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={address.lastName}
                onChange={handleAddressChange}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3"
              />
            </div>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={address.address}
              onChange={handleAddressChange}
              className="w-full mt-4 border-gray-300 rounded-lg shadow-sm p-3"
            />
            <input
              type="text"
              name="apartment"
              placeholder="Apartment, Suite, etc. (Optional)"
              value={address.apartment}
              onChange={handleAddressChange}
              className="w-full mt-4 border-gray-300 rounded-lg shadow-sm p-3"
            />
            <div className="grid grid-cols-3 gap-4 mt-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={address.city}
                onChange={handleAddressChange}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3"
              />
              <input
                type="text"
                name="province"
                placeholder="Province"
                value={address.province}
                onChange={handleAddressChange}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3"
              />
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={address.postalCode}
                onChange={handleAddressChange}
                className="w-full border-gray-300 rounded-lg shadow-sm p-3"
              />
            </div>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={address.phone}
              onChange={handleAddressChange}
              className="w-full mt-4 border-gray-300 rounded-lg shadow-sm p-3"
            />
          </div>

          {/* Payment Section */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Payment</h2>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit-card"
                  checked={paymentMethod === 'credit-card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-[#ffd500] focus:ring-[#ffd500] mr-2"
                />
                Credit Card
              </label>
            </div>
            {paymentMethod === 'credit-card' && (
              <div>
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full border-gray-300 rounded-lg shadow-sm p-3 mb-4"
                />
                <div className="grid grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="MM / YY"
                    className="w-full border-gray-300 rounded-lg shadow-sm p-3"
                  />
                  <input
                    type="text"
                    placeholder="Security Code"
                    className="w-full border-gray-300 rounded-lg shadow-sm p-3"
                  />
                  <input
                    type="text"
                    placeholder="Name on Card"
                    className="w-full border-gray-300 rounded-lg shadow-sm p-3"
                  />
                </div>
              </div>
            )}
          </div>
          {/* Pay Now Button */}
          <button
            onClick={handlePayNow}
            className="w-full bg-[#ffd500] hover:bg-black hover:text-white text-black font-bold py-3 rounded-lg"
          >
            Pay Now
          </button>
        </div>

        {/* Right Side - Cart Summary */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Your Order</h2>
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center">
                  <img
                    src={item.selectedColor.images[0]}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                  <div className="ml-4">
                    <p className="text-gray-800 font-medium">{item.name}</p>
                    <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="text-gray-800 font-medium">{item.price.toFixed(2)} {item.currency}</p>
              </div>
            ))}
          </div>

          {/* Subtotal */}
          <div className="border-t mt-4 pt-4">
            <p className="flex justify-between text-gray-800 font-medium">
              <span>Subtotal:</span> <span>{totalPrice.toFixed(2)} {cartItems[0]?.currency || '$'}</span>
            </p>
            {/* Shipping */}
            <p className="flex justify-between text-gray-800 font-medium">
              <span>Shipping:</span>{' '}
              <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
            </p>

            {/* Estimated Tax (only for CA) */}
            {selectedStore === 'CA' && (
              <p className="flex justify-between text-gray-800 font-medium">
                <span>Estimated Tax (TPS+TVQ):</span>{' '}
                <span>${tax.toFixed(2)}</span>
              </p>
            )}

            {/* Grand Total */}
            <p className="flex justify-between text-lg font-bold mt-2">
              <span>Total:</span> <span>${grandTotal.toFixed(2)} {cartItems[0]?.currency || '$'}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
