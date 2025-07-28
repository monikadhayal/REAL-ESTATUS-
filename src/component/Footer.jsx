import { useState } from "react";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (!subscribed) {
      alert("🎉 Subscribed Successfully!");
    }
    setSubscribed(!subscribed);
  };

  return (
    <footer className="bg-[#0b1120] text-white w-full">
      <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
     
        <div>
          <h1 className="text-xl font-bold">🏠 Estate</h1>
          <p className="text-sm mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>
        <div>
          
          <h2 className="font-bold mb-2">Company</h2>
          <ul className="space-y-1 text-sm">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold mb-2">Subscribe to our newsletter</h2>
          <p className="text-sm mb-2">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-slate-700 text-white px-3 py-2 w-full sm:w-auto rounded"
            />
            <button
              onClick={handleSubscribe}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white transition"
            >
              {subscribed ? "Unsubscribe" : "Subscribe"}
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mx-6 mt-6" />

      <p className="text-center text-sm text-gray-400 py-4">
        © 2024 GreateStack. All Rights Reserved.
      </p>
    </footer>
  );
}
