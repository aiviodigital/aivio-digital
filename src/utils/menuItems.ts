export interface MenuItem {
  key: 'googleAdsAudit' | 'googleAdsManagement' | 'googleAdsFaq' | 'caseStudy' | 'aboutUs' | 'blogs' | 'contactUs';
  href: string;
}
export const getMenuLink = (key: string, currentLang: string): string => {
  return `/${currentLang}/${key}`;
};

export function getMenuItems(currentLang: string): MenuItem[] {
  return [
    { key: 'googleAdsAudit', href: getMenuLink('google-ads-audit', currentLang) },
    { key: 'googleAdsManagement', href: getMenuLink('google-ads-management', currentLang) },
    // { key: 'googleAdsFaq', href: getMenuLink('google-ads-faq', currentLang) },
    { key: 'caseStudy', href: getMenuLink('case-study', currentLang) },
    { key: 'aboutUs', href: getMenuLink('about-us', currentLang) },
    { key: 'blogs', href: getMenuLink('blogs', currentLang) },
    { key: 'contactUs', href: getMenuLink('contact', currentLang) },
  ];
}

export function getHeaderMenuItems(currentLang: string): MenuItem[] {
  return [
    { key: 'googleAdsAudit', href: getMenuLink('google-ads-audit', currentLang) },
    { key: 'googleAdsManagement', href: getMenuLink('google-ads-management', currentLang) },
    // { key: 'googleAdsFaq', href: getMenuLink('google-ads-faq', currentLang) },
    { key: 'caseStudy', href: getMenuLink('case-study', currentLang) },
    { key: 'aboutUs', href: getMenuLink('about-us', currentLang) },
    // { key: 'blogs', href: getMenuLink('blogs', currentLang) },
  ];
}
