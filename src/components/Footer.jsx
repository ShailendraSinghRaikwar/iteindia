import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-brandBlue text-white py-8 mt-12">
      <div className="container mx-auto px-6 text-center">
        <h3 className="font-semibold text-lg">Contact Us</h3>
        <p className="mt-2">Email: info@iteindia.in | Phone: +91 12345 67890</p>
        <p className="mt-4 text-sm">
          © {new Date().getFullYear()} ITE India. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
