'use client';

import { motion } from 'framer-motion';
import { CloseIcon } from './Icons';
import FundDailyEarnings from './FundDailyEarnings';

export default function PortfolioEarningsModal({ onClose, series, theme, masked, onGoHome }) {
  const hasData = Array.isArray(series) && series.length > 0;

  return (
    <motion.div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="组合每日收益"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="glass card modal portfolio-earnings-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="title" style={{ marginBottom: 16, justifyContent: 'space-between', flexShrink: 0 }}>
          <span>我的收益（组合汇总）</span>
          <button
            type="button"
            className="icon-button"
            onClick={onClose}
            aria-label="关闭"
            style={{ border: 'none', background: 'transparent' }}
          >
            <CloseIcon width="20" height="20" />
          </button>
        </div>
        <div className="portfolio-earnings-modal-body scrollbar-y-styled">
          {hasData ? (
            <FundDailyEarnings series={series} theme={theme} masked={masked} />
          ) : (
            <div className="portfolio-earnings-empty muted" style={{ textAlign: 'center', padding: '24px 12px' }}>
              <p style={{ margin: '0 0 12px', color: 'var(--text)' }}>暂无每日收益记录</p>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5 }}>
                请先在首页添加基金并维护持仓，系统会在刷新估值后自动累计每日收益。
              </p>
              {onGoHome && (
                <button type="button" className="button" style={{ marginTop: 20, width: '100%' }} onClick={onGoHome}>
                  返回首页
                </button>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
