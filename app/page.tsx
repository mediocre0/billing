import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Wallet } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <main className="p-4 sm:p-8 2xl:p-12"> 

      <div id="pending" className='mt-10 p-4'>
        <p>You have (1) unsettled statement of account.</p>
        <div className="grid w-full lg:grid-cols-2 2xl:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Pizza Hut Gen. Santos</CardTitle>
              <CardDescription>Cor. Santiago Blvd, San Miguel St.</CardDescription>
            </CardHeader>
            <CardContent className='flex justify-center'>
              <h2> ₱ 2,288.00 </h2>
            </CardContent>
            <CardFooter>
              <Button className='w-full' asChild>
                <Link href='pages/details'> <Wallet />  Settle </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* <div id="main" className='flex flex-wrap justify-center items-center h-screen'>
        <Button variant="default">View SOA</Button>
      </div> */}

    </main>
  )
}

export default Home