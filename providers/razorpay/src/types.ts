export interface RazorpayProviderOptions {
  orderId?: string;
  notes?: Record<string, string>;
  theme?: { color?: string; backdrop_color?: string };
  image?: string;
}
