'use client'

import React from 'react'
import Link from 'next/link'

export const MainNavigation = () => {
  return (
    <div className="flex items-center gap-4">
      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
        <Link href="/de/server-example" title="RSC Example">
          Protecting React Server Component.
        </Link>
        <Link href="/de/middleware-example" title="Middleware Example">
          Using Middleware to protect pages & APIs.
        </Link>
        <Link href="/de/api-example" title="Route Handler Example">
          Getting the session inside an API Route.
        </Link>
      </ul>
      <Link href="/de/profile">Client Side (Profile)</Link>
    </div>
  )
}
