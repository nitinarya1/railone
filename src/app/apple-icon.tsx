import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0A64F8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="120" height="80" viewBox="0 0 300 200" fill="none" style={{ marginLeft: '4px' }}>
          {/* Top curve of the train */}
          <path d="M 50 100 Q 150 50 200 60 Q 250 80 250 150" stroke="white" strokeWidth="12" strokeLinecap="round" fill="none"/>
          {/* Bottom line */}
          <path d="M 60 140 L 180 140 Q 220 140 230 160" stroke="white" strokeWidth="12" strokeLinecap="round" fill="none"/>
          {/* Side window slant */}
          <path d="M 170 85 L 210 135" stroke="white" strokeWidth="12" strokeLinecap="round" />
          {/* Speed line 1 */}
          <path d="M 40 85 L 120 75" stroke="white" strokeWidth="8" strokeLinecap="round" />
          {/* Speed line 2 */}
          <path d="M 50 115 L 140 105" stroke="white" strokeWidth="8" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
