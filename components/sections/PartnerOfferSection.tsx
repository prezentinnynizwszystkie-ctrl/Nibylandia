
import React from 'react';
import { Partner } from '../../types';
import { OfferNibylandia } from '../partners/OfferNibylandia';
import { OfferDefault } from '../partners/OfferDefault';

interface PartnerOfferSectionProps {
  partner?: Partner;
  onLearnMore?: () => void;
}

export const PartnerOfferSection: React.FC<PartnerOfferSectionProps> = ({ partner, onLearnMore }) => {
  // Logic to determine which offer component to render
  // Partner ID 7 is Nibylandia
  if (partner?.Id === 7) {
    return <OfferNibylandia partner={partner} onLearnMore={onLearnMore} />;
  }

  // Fallback to default offer for other partners
  return <OfferDefault partner={partner} onLearnMore={onLearnMore} />;
};
