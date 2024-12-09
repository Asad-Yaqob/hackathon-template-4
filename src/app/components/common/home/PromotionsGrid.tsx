import React from 'react';
import { PromotionCard } from './PromotionCard';
import { SecondaryPromotionCard } from './SecondaryPromotionCard';
import { ExecutiveChairList } from './ExecutiveChairList';

export function PromotionsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <PromotionCard />
      <div className="grid grid-cols-1 gap-6">
        <SecondaryPromotionCard />
        <ExecutiveChairList />
      </div>
    </div>
  );
}