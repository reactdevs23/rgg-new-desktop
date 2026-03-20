import React, { useState } from "react";
import styles from "./ErrorModal.module.css";
import { useErrorModal } from "./ErrorModalContext";

const ErrorIcon = () => (
  <span className={styles.errorIconLeft}>
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="var(--Red, #ff5252)" fillOpacity="0.12" />
      <path d="M10 6.5v4" stroke="var(--Red, #ff5252)" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="10" cy="13.2" r="0.9" fill="var(--Red, #ff5252)"/>
    </svg>
  </span>
);

const ExpandIcon = ({ expanded }: { expanded: boolean }) => expanded ? (
  <svg width="14" height="14" viewBox="0 0 20 20" style={{ verticalAlign: 'middle', marginRight: 2 }}><path d="M6 12l4-4 4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
) : (
  <svg width="14" height="14" viewBox="0 0 20 20" style={{ verticalAlign: 'middle', marginRight: 2 }}><path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
);

const CopyIcon = () => (
  <svg width="12" height="12" viewBox="0 0 20 20" style={{ verticalAlign: 'middle', marginRight: 2 }}><rect x="6" y="6" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none"/><rect x="3" y="3" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none"/></svg>
);

const AiIcon = () => (
  <svg width="12" height="12" viewBox="0 0 20 20" style={{ verticalAlign: 'middle', marginRight: 2 }}><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.2" fill="none"/><path d="M7 13c1.5-2 4.5-2 6 0" stroke="currentColor" strokeWidth="1" fill="none"/><circle cx="8" cy="9" r="1" fill="currentColor"/><circle cx="12" cy="9" r="1" fill="currentColor"/></svg>
);

const InfoIcon = () => (
  <svg width="12" height="12" viewBox="0 0 20 20" style={{ verticalAlign: 'middle', marginRight: 2 }}><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.2" fill="none"/><rect x="9" y="8" width="2" height="5" rx="1" fill="currentColor"/><rect x="9" y="5" width="2" height="2" rx="1" fill="currentColor"/></svg>
);

const mockAIExplain = async (error: string, logs?: string) => {
  // Simulate a delay and return a mock explanation
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(
        "This error means the app encountered an unexpected issue. Please check your internet connection or try again. If the problem persists, contact support."
      );
    }, 1800);
  });
};

const ErrorModal: React.FC = () => {
  const { isOpen, modalData, hideErrorModal } = useErrorModal();
  const [showLogs, setShowLogs] = useState(false);
  const [copied, setCopied] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);

  if (!isOpen || !modalData) return null;

  const handleCopy = () => {
    if (modalData.logs) {
      navigator.clipboard.writeText(modalData.logs);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  const handleAIExplain = async () => {
    setAiLoading(true);
    setAiExplanation(null);
    const explanation = await mockAIExplain(modalData.error, modalData.logs);
    setAiExplanation(explanation);
    setAiLoading(false);
  };

  const handleAIClose = () => setAiExplanation(null);

  const isExpanded = showLogs || !!aiExplanation;

  return (
    <div className={styles.modalContainer} role="alertdialog" aria-modal="true">
      <div className={styles.wrapper}>
        <button className={styles.closeButton} onClick={hideErrorModal} aria-label="Close">×</button>
        <div className={styles.rowCenter}>
          <ErrorIcon />
          <div className={styles.message} style={{ fontSize: '0.93rem', fontWeight: 500, margin: 0 }}>{modalData.error}</div>
        </div>
        {modalData.logs && (
          <div className={styles.actionRow}>
            <button className={styles.expandBtn} onClick={() => setShowLogs((v) => !v)}>
              <ExpandIcon expanded={showLogs} />
              {showLogs ? "Hide Logs" : "Show Logs"}
            </button>
            <button className={styles.copyBtn} onClick={handleCopy} disabled={copied}>
              <CopyIcon />
              {copied ? "Copied!" : "Copy Logs"}
            </button>
            <button className={styles.aiBtn} onClick={handleAIExplain} disabled={aiLoading}>
              <AiIcon />
              Explain with AI
              {aiLoading && <span className={styles.aiLoading} />}
            </button>
          </div>
        )}
        {showLogs && modalData.logs && (
          <pre className={styles.logs}>{modalData.logs}</pre>
        )}
        {aiExplanation && (
          <div className={styles.explanation}>
            <AiIcon />
            <span><strong>AI Explanation:</strong> {aiExplanation}</span>
            <button onClick={handleAIClose} style={{ marginLeft: 8, background: 'none', border: 'none', color: 'var(--Primitive-400)', cursor: 'pointer', fontSize: '1.1em', lineHeight: 1, padding: 0 }} aria-label="Hide AI explanation">×</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorModal; 