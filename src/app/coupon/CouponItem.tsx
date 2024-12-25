// CouponItem.tsx
import React from 'react';
import axios from 'axios';
import styles from './styles.module.css';

interface Coupon {
  code: string;
  expirationDate: string;
  usedAt: string | null;
  username: string | null;
  used: boolean;
}

interface Props {
  coupon: Coupon;
}

const CouponItem: React.FC<Props> = ({ coupon }) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const handleDelete = async () => {
    try {
      await axios.delete(`${baseUrl}/api/v1/coupon/${coupon.code}`, {
        headers: { 'Authorization': `${localStorage.getItem('jwt')}` }
      });
    } catch (error) {
      console.error('Error deleting coupon:', error);
    }
    window.location.reload();
  };

  return (
      <div className={styles.coupon}>
        <p>코드: {coupon.code}</p>
        <p>만료일: {coupon.expirationDate}</p>
        <p>사용됨: {coupon.used ? '예' : '아니오'}</p>
        <p>사용된 날짜: {coupon.usedAt ?? '미사용'}</p>
        <p>사용자: {coupon.username ?? '없음'}</p>
        <button onClick={handleDelete} className={styles.button}>삭제</button>
      </div>
  );
};

export default CouponItem;

