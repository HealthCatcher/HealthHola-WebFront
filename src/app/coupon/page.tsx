// CouponPage.tsx
"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CouponForm from './CouponForm';
import CouponList from './CouponList';
import styles from './styles.module.css';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

interface Coupon {
  code: string;
  expirationDate: string;
  usedAt: string | null;
  username: string | null;
  used: boolean;
}

const CouponPage: React.FC = () => {
  const [coupons, setCoupons] = useState<Coupon[]>([]);

  useEffect(() => {
    fetchCoupons();
  }, []);

  const fetchCoupons = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/coupon`, {
        headers: { 'Authorization': `${localStorage.getItem('jwt')}` }
      });
      setCoupons(response.data);
    } catch (error) {
      console.error('Error fetching coupons:', error);
    }
  };

  return (
      <div className={styles.container}>
        <h1>쿠폰 생성</h1>
        <CouponForm onCouponAdded={fetchCoupons} />
        <CouponList coupons={coupons} />
      </div>
  );
};

export default CouponPage;

