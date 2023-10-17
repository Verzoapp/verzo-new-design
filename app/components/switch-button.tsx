"use client"
import { useState } from 'react'
import { Switch } from '@headlessui/react'


function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function SwitchButton() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={classNames(
        'relative bg-brightGray inline-flex items-center justify-around h-42 w-198 flex-shrink-0 cursor-pointer rounded-30 border-2 border-transparent transition-colors duration-200 ease-in-out'
      )}
    >
      <span className={classNames(enabled ? "text-mainGrey ml-3" : "py-4px px-18px text-white bg-lightBlue", "rounded-50  text-sm")}>Features</span>
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? 'translate-x-3 py-4px px-18px text-white bg-lightBlue mr-3' : 'translate-x-0 text-mainGrey',
          'pointer-events-none inline-block  transform rounded-50  transition duration-500 ease-in-out'
        )}> Benefits</span>
    </Switch>
  )
}