import React, { useState, useEffect } from 'react';
import { formatCountdownTimer } from '../../utils';
import { SESSION_DURATION } from '../../constants';

export function SessionTimer() {
  const [timeLeft, setTimeLeft] = useState(SESSION_DURATION);
  const timesUp = timeLeft < 1000;

  useEffect(() => {
    if (timesUp) window.location.reload();

    const interval = setInterval(() => setTimeLeft(timeLeft - 1000), 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className={`session-timer ${timesUp ? 'u-backgroundNegative' : 'u-backgroundPositive'} u-roundedLarge u-paddingTiny u-paddingHorizontalExtraSmall u-text100 u-textUppercase u-textWhite`}>
      Discussion session active
      <div className="stat u-text600 u-textCenter">{formatCountdownTimer(timeLeft)}</div>
    </div>
  );
}
