// CouponList.tsx
import React from 'react';
import CouponItem from './CouponItem';
import styles from './styles.module.css';

interface Coupon {
  code: string;
  expirationDate: string;
  usedAt: string | null;
  username: string | null;
  used: boolean;
}

interface Props {
  coupons: Coupon[];
}

const CouponList: React.FC<Props> = ({ coupons }) => {
  return (
      <div>
        <h2>쿠폰 목록</h2>
        {coupons.map((coupon, index) => (
            <CouponItem key={index} coupon={coupon} />
        ))}
      </div>
  );
};

export default CouponList;
