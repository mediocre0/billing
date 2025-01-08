'use client'

import { Button } from "@/components/ui/button"
import { 
    Drawer, 
    DrawerClose, 
    DrawerContent, 
    DrawerDescription, 
    DrawerFooter, 
    DrawerHeader, 
    DrawerTitle, 
    DrawerTrigger } from "@/components/ui/drawer"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"  
import { cn } from "@/lib/utils"
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover"
import { CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "cmdk"
import { Check, ChevronsUpDown, Command, CreditCard, Landmark, Wallet } from "lucide-react"
import React from 'react'

const users = [
    {
      value: "n",
      label: "Nicky",
    },
    {
      value: "j",
      label: "Jaia",
    },
    {
      value: "p",
      label: "Paulo",
    },
  ]

function details() {

  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <main className="p-4 sm:p-8 2xl:p-12"> 
      
      <div id="title" className='w-full'>
        <h1> SOA Management System</h1>
        <p>Managing made easy.</p>
      </div>

      <div id="tbl">
        <h3 className="pt-4">Pizza Hut Gen. Santos</h3>
        <p className="pt-0 pb-4">Cor. Santiago Blvd, San Miguel St.</p>
        <p className="pt-0 pb-4">01-08-2025 | Table C4 | Guest Count: 5</p>

      <div id='cmb' className="pt-6 pb-4">
        <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
            >
            {value
                ? users.find((user) => user.value === value)?.label
                : "Select user..."}
            <ChevronsUpDown className="opacity-50" />
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
            <Command>
            <CommandInput placeholder="Search user..." className="h-9" />
            <CommandList>
                <CommandEmpty>No user found.</CommandEmpty>
                <CommandGroup>
                {users.map((user) => (
                    <CommandItem
                    key={user.value}
                    value={user.value}
                    onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue)
                        setOpen(false)
                    }}
                    >
                    {user.label}
                    <Check
                        className={cn(
                        "ml-auto",
                        value === user.value ? "opacity-100" : "opacity-0"
                        )}
                    />
                    </CommandItem>
                ))}
                </CommandGroup>
            </CommandList>
            </Command>
        </PopoverContent>
        </Popover>
      </div>

        <Table>
            <TableCaption> Nothing follows </TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">Quantity</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Item</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                <TableCell className="font-medium">1</TableCell>
                <TableCell>AP</TableCell>
                <TableCell>MOZZA 12PCS</TableCell>
                <TableCell className="text-right">199.00</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-medium">1</TableCell>
                <TableCell>AP</TableCell>
                <TableCell>CFRIES R</TableCell>
                <TableCell className="text-right">89.00</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-medium">1</TableCell>
                <TableCell>BV</TableCell>
                <TableCell>PEPSI PT</TableCell>
                <TableCell className="text-right">199.00</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-medium">4</TableCell>
                <TableCell>EN</TableCell>
                <TableCell>CAJUN R @189</TableCell>
                <TableCell className="text-right">756.00</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-medium">1</TableCell>
                <TableCell>PT</TableCell>
                <TableCell>BOLOG R</TableCell>
                <TableCell className="text-right">159.00</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-medium">1</TableCell>
                <TableCell>PZ</TableCell>
                <TableCell>MEGA CHL R</TableCell>
                <TableCell className="text-right">339.00</TableCell>
                </TableRow>
                <TableRow>
                <TableCell className="font-medium">1</TableCell>
                <TableCell>PZ</TableCell>
                <TableCell>MEGA VL R</TableCell>
                <TableCell className="text-right">339.00</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell colSpan={3}>Sub-total</TableCell>
                    <TableCell className="text-right">2,080.00</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell colSpan={3}>Service charge</TableCell>
                    <TableCell className="text-right">208.00</TableCell>
                </TableRow>
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">₱2,288.00</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
        
        <Drawer>
        <DrawerTrigger><CreditCard /> Pay </DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
            <DrawerTitle>Pay to the following accounts: </DrawerTitle>
            <DrawerDescription>GCASH - 0955 389 7419</DrawerDescription>
            <DrawerDescription>BDO - 0032 9051 3615</DrawerDescription>
            <DrawerDescription className="border-t">You can also pay in cash!</DrawerDescription>
            </DrawerHeader>
        </DrawerContent>
        </Drawer>
        </div>
    </main>
  )
}

export default details