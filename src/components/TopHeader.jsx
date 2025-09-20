import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
  FaAt,
  FaYoutube,
} from "react-icons/fa";

export default function TopHeader() {
  return (
    <div className="bg-gradient-topheader text-gray-800 text-sm">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Left side - Phone and Email */}
        <div className="flex space-x-6">
          <span>
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              +91- 9111240646
            </div>
          </span>
          <span>
            <div className="flex items-center gap-2">
              <FaAt /> info@iteindia.in
            </div>
          </span>
        </div>

        {/* Right side - Social media */}
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/ITEinfotech/"
            className="hover:text-blue-400"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.youtube.com/@iteinfotech"
            className="hover:text-blue-300"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.linkedin.com/company/iteindia"
            className="hover:text-blue-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/ite_infotech/"
            className="hover:text-pink-500"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
