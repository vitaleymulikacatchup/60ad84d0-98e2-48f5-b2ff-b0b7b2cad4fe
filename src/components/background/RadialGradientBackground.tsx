'use client';

import React, { memo } from 'react';
import { cls } from '@/lib/utils';

interface RadialGradientBackgroundProps {
  className?: string;
  centerColor?: string;
  edgeColor?: string;
  size?: string;
  position?: string;
}

const RadialGradientBackground = ({
  className = "",
  centerColor = "var(--background)",
  edgeColor = "var(--color-primary-cta)",
  size = "130% 130%",
  position = "50% 15%",
}: RadialGradientBackgroundProps) => {
  return (
    <div
      className={cls("fixed inset-0 -z-10 h-full w-full", className)}
      style={{
        background: `radial-gradient(${size} at ${position}, ${centerColor} 40%, ${edgeColor} 100%)`,
      }}
      aria-hidden="true"
    />
  );
};

RadialGradientBackground.displayName = 'RadialGradientBackground';

export default memo(RadialGradientBackground);
