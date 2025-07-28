import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { 
  shippingLinks, 
  supportLinks, 
  informationLinks, 
  accountLinks, 
  paymentMethods 
} from "@/constants/footerLinks";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-[#8BC34A]">LIÊN HỆ VỚI CHÚNG TÔI</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#8BC34A] mt-1 flex-shrink-0 " />
                <div className="text-sm text-gray-300">
                  Tầng 4, Tòa nhà Hanoi Group Số 442 Đội Cần,
                  <br />
                  P Cống Vị, Q. Ba Đình, Hà Nội
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#8BC34A] flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <div>(04) 6674 2332</div>
                  <div>(04) 3786 8904</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#8BC34A] flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <div>(08) 6680 9686</div>
                  <div>Support@bizweb.vn</div>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#8BC34A]">CHUYỂN HÀNG</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {shippingLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#8BC34A]">HỖ TRỢ</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#8BC34A]">THÔNG TIN</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {informationLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#8BC34A]">MY ACCOUNT</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {accountLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © Copyright 2008-2014 DKT Technology JSC
            </div>
            <div className="flex items-center space-x-4">
              {paymentMethods.map((payment, index) => (
                <Image 
                  key={index}
                  src={payment.src} 
                  alt={payment.alt} 
                  width={32} 
                  height={32} 
                  className="h-8 w-auto" 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
