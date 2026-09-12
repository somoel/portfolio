import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, locales } from "@/lib/site";

type SupportedLocale = (typeof locales)[number];

function isSupported(value: string | undefined): value is SupportedLocale {
  return value === "es" || value === "en";
}

function detectLocale(request: NextRequest): SupportedLocale {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (isSupported(cookieLocale)) return cookieLocale;

  const header = request.headers.get("accept-language");
  if (!header) return defaultLocale;

  const preferred = header
    .split(",")
    .map((part) => {
      const [tag, quality] = part.trim().split(";q=");
      return { tag: tag.trim().toLowerCase(), q: quality ? Number(quality) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of preferred) {
    if (tag.startsWith("en")) return "en";
    if (tag.startsWith("es")) return "es";
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (hasLocale) return NextResponse.next();

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
};
