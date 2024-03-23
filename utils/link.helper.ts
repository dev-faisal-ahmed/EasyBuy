const title: Record<string, string> = {
  '/admin': 'Dashboard',
  '/admin/products': 'All Products',
  '/admin/customers': 'All Customers',
  '/admin/orders': 'All Orders',
};

export function generateTitle(url: string) {
  let pageTitle = title[url];
  if (pageTitle) return pageTitle;
  if (url.includes('/customers')) return 'Customer Information';
}
