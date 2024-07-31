'use client'

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useUser, UserButton } from "@clerk/nextjs"
import Link from "next/link"

export default function NavBar() {
    const {user, isSignedIn} = useUser() 

    return (
        <div className="flex justify-between items-center p-4 border-b">
            <Link href='/'>
                <h1 className="font-bold text-xl">
                    Expense Tracker
                </h1>
            </Link>
            
            {isSignedIn ? (<UserButton/>) : 
                <div className="space-x-2">
                    <Link href='/dashboard'>
                        <Button variant="outline">
                            Dashboard
                        </Button>
                    </Link>

                    <Link href='/get-started'>
                        <Button>
                            Get started
                        </Button>
                    </Link>
                </div>
            }
        </div>
    )
}
