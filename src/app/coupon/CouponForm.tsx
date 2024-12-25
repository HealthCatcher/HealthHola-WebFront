// CouponForm.tsx
import React, { FormEvent, useState } from 'react';
import axios from 'axios';
import styles from './styles.module.css';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

interface Props {
  onCouponAdded: () => void;
}

const CouponForm: React.FC<Props> = ({ onCouponAdded }) => {
  const [couponCode, setCouponCode] = useState<string>('');
  const [expirationDate, setExpirationDate] = useState<string>("2024-12-25T13:48:31.153Z");
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = { couponCode, expirationDate };
      await axios.post(`${baseUrl}/api/v1/coupon`, data, {
        headers: { 'Authorization': `${localStorage.getItem('jwt')}` }
      });
      setMessage('쿠폰이 성공적으로 추가되었습니다.');
      setCouponCode('');
      onCouponAdded();
    } catch (error) {
      setMessage('쿠폰 추가 중 에러가 발생했습니다.');
      console.error('Coupon creation error:', error);
    }
  };

  return (
      <div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="쿠폰 코드 입력"
              required
              className={styles.input}
          />
          <input
              type="datetime-local"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              required
              className={styles.input}
          />
          <button type="submit" className={styles.button}>쿠폰 추가</button>
        </form>
        {message && <p>{message}</p>}
      </div>
  );
};

export default CouponForm;
