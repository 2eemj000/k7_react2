import React from 'react'

export default function Login() {
  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class="text-center text-2xl font-bold leading-4 tracking-tight text-gray-900">[ Sign in to your account ]</h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-7" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-slate-600">Email address</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-slate-600">Password</label>
              <div class="text-sm">
                <a href="#" class="font-semibold text-slate-400 hover:text-slate-500">Forgot password?</a>
              </div>
            </div>
            <div class="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>
          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-orange-400 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  )
}
