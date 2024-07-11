'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const layout = ({ children }) => {
    const pathname = usePathname()
    return (
        <div>
            {pathname !== "/about/aboutCollege" ? <ul>
                <li> <Link href="/about">About</Link> </li>
                <li> <Link href="/about/aboutCollege">About College</Link> </li>
                <li> <Link href="/about/aboutStudent">About Student</Link> </li>
                <li> <Link href="/about/aboutTeacher">About Teacher</Link> </li>
            </ul> : <ul>
                <li> <Link href="/about">About</Link> </li>
            </ul>}
            {children}
        </div>
    )
}

export default layout



/* Here We Created A special layout file for About page which will be common layout. here childern refers to other content of website
    we can put content before and after children

    use array if there are numerius pages in which layout should not show
*/