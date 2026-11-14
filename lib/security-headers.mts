export function securityHeaders(isDevelopment: boolean, isStudio = false) {
  // Static App Router pages need inline hydration scripts; nonce CSP would disable SSG.
  const policy = [
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ""}`,
    "script-src-attr 'none'",
    "style-src 'self' 'unsafe-inline'",
    `img-src 'self' data: blob: https://images.unsplash.com${isStudio ? " https://cdn.sanity.io" : ""}`,
    `font-src 'self'${isStudio ? " https://studio-static.sanity.io" : ""}`,
    `connect-src 'self'${isDevelopment ? " ws: wss:" : ""}${isStudio ? " https://api.sanity.io https://*.api.sanity.io https://*.apicdn.sanity.io" : ""}`,
    `frame-src https://docs.google.com${isStudio ? " https://api.sanity.io https://*.api.sanity.io" : ""}`,
    ...(isStudio ? ["worker-src 'self' blob:"] : []),
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    ...(!isDevelopment ? ["upgrade-insecure-requests"] : [])
  ].join("; ");

  return [
    { key: "Content-Security-Policy", value: policy },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "X-Frame-Options", value: "DENY" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    {
      key: "Permissions-Policy",
      value: "camera=(), microphone=(), geolocation=(), payment=()"
    }
  ];
}
