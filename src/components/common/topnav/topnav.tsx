"use client";
import Link from "next/link";
import React from "react";
import {useAuth} from "@/utils/context/authContext";

const TopNavigator = () => {
  const {user, loading} = useAuth();

  return (
      <>
      <nav className="top-0 z-10 fixed bg-brand-primary-500 p-4 w-full">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-white text-lg font-bold">
            HearUR
          </Link>

          <div className="flex space-x-4 mr-3">
            {/*<NavLink href="/health-information">건강정보</NavLink>*/}
            <NavLink href="/coupon">쿠폰</NavLink>
            <NavLink href="/report">신고내역</NavLink>
            <NavLink href="/community">커뮤니티</NavLink>
            <NavLink href="/experience-notice">체험단</NavLink>
            {/*<NavLink href="/self-diagnosis">자가진단</NavLink>*/}
            <NavLink href="/my">내 정보</NavLink> {/* 배포시 삭제 해야함 */}
            {loading ? null : (user ? (
                <>
                  <NavLink href="/my">내 정보</NavLink>
                </>
            ) : (
                  <NavLink href="/signin">로그인</NavLink>
            ))}
          </div>
        </div>
      </nav>
        <div className="h-16"></div>
      </>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({href, children}) => {
  return (
      <Link href={href} className="text-white hover:text-gray-300">
        {children}
      </Link>
  );
};

export default TopNavigator;