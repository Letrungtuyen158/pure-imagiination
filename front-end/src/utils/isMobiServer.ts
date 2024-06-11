import { headers } from "next/headers";

function isMobile(userAgent: string) {
  return /Mobile/.test(userAgent);
}

export const isMobileDevice = () => {
  const { get } = headers();
  const ua = get("user-agent") || "";
  return isMobile(ua);
};

