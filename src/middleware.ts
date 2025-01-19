import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest){
    // console.log("HI - Middleware");

    const isAllowed = true;
    if (!isAllowed && request.nextUrl.pathname !== "/") {
        return NextResponse.redirect(new URL('/', request.url));
    }
    NextResponse.next();
}