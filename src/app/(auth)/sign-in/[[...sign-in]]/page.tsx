import { SignIn } from '@clerk/nextjs'
import React from 'react'

export default function SignInPage() {
  return (
    <div className="flex h-screen">
        <div className="flex justify-center items-center w-1/2">
            <img src="\Sandy_Bus-21_Single-07.jpg" alt="" />
        </div>

        <div className="flex justify-center items-center w-1/2">
            <SignIn/>
        </div>
    </div>
  )
}
