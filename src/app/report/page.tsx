"use client"
import React, { useState, useEffect } from 'react';
import { fetchReports } from './api';
import ReportList from './ReportList';
import { Report } from '@/types/report';

const ReportPage: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    const initFetch = async () => {
      try {
        const data = await fetchReports();
        setReports(data);
      } catch (error) {
        console.error('Failed to fetch reports:', error);
      }
    };

    initFetch();
  }, []);

  return (
      <div>
        <h1>신고내역</h1>
        <ReportList reports={reports} />
      </div>
  );
};

export default ReportPage;
