import { makeID } from '../helper/makeID';

const sectors = [
  { label: 'Agribusiness' },
  { label: 'Construction' },
  { label: 'Consumer Goods/Retail' },
  { label: 'Education & Workforce Development' },
  { label: 'Energy Access' },
  { label: 'Financial Services' },
  { label: 'Government MDAs' },
  { label: 'Healthcare' },
  { label: 'Manufacturing' },
  { label: 'Technology' },
  { label: 'Trade & Logistics' },
  { label: 'Water & Sanitation' },
];

const defaultFormData = {
  BranchId: 30,
  BranchName: 'Head Office',
  TempUseSessionId: makeID(),
  InstitutionCode: 'ISWMB',
  PersonResponsible: makeID(),
  IsWebPartner: 1,
};

const services = [
  {
    label: 'Autopay',
    value: 'Autopay',
    description: 'Mobile & Bank Transfers / Disbursements',
  },
  {
    label: 'Interswitch Payment Gateway',
    value: 'IPG',
    description: 'Collections from Card and Mobile Money',
  },
  {
    label: 'Quickteller Web',
    value: 'QT Web',
    description:
      'API for bill payments for those with an agent network or their own channel for B2B clients',
  },
  {
    label: 'Cross selling all other services and products under Interswitch',
    value: 'Cross Selling',
    description: 'Including Verve',
  },
];

const regions = [
  { label: 'Central' },
  { label: 'Northern' },
  { label: 'Eastern' },
  { label: 'Western' },
  { label: 'Southern' },
]

export { sectors, defaultFormData, services, regions };
