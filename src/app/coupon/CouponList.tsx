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
  coupons: string | Coupon[];
}

const CouponList: React.FC<Props> = ({ coupons }) => {
  const isHtmlResponse = typeof coupons === 'string' && coupons.startsWith('<!DOCTYPE html>');

  if (isHtmlResponse) {
    // HTML 응답이 들어온 경우, 사용자에게 쿠폰 목록을 불러올 수 없음을 알림
    return (
        <div>
          <h2>쿠폰 목록</h2>
          <p>쿠폰 목록을 불러올 수 없습니다. 로그인이 필요할 수 있습니다.</p>
        </div>
    );
  }

  if (Array.isArray(coupons)) {

    return (
        <div>
          <h2>쿠폰 목록</h2>
          {coupons.length === 0 ? (
              <p>쿠폰이 없습니다.</p>
          ) : (
              coupons.map((coupon) => (
                  <CouponItem key={coupon.code} coupon={coupon} />
              ))
          )}
        </div>
    );
  }

  return null; // 예상치 못한 타입에 대한 안전 장치
};

export default CouponList;
