import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import RoundComplete from './components/RoundComplete'
import Btn from './components/FormInputs/Btn'
import Selection from './components/FormInputs/Selection'
import Input from './components/FormInputs/Input'

function App() {
  const [count, setCount] = useState('')
  const [themeDark, setThemeDark] = useState('DARK')
  const [themeLight, setThemeLight] = useState('LIGHT')

  const itemSelect = [
    {id: 1, name: 'Option 1', value: '1'},
    {id: 2, name: 'Option 2', value: '2'},
    {id: 3, name: 'Option 3', value: '3'}
  ]

  return (
    themeDark && themeLight === undefined ? 'Loading' :
      <div>
        <div>

          <div className='border border-neutral-700 rounded-lg mb-2'>
            <div className='flex gap-2 p-4'>
              <input type='checkbox' />
            Glassmorphism
            <label>{count}</label>
            </div>
          </div>
        
          <div className='flex-col gap-2 p-4 bg-black/70 rounded-lg border border-neutral-800'>
            <div className='flex gap-2'>
              <Btn name={'Home'} icon={'HOME'} theme={themeDark} />
              <Btn name={'Settings'} theme={themeDark} />
              <Btn icon={'GEAR'} theme={themeDark} />
              <Selection theme={themeDark} items={itemSelect} />
            </div>
            <div className='flex gap-2 pt-4'>
              <Input name={'Username'} icon={'USER'} type={'text'} theme={themeDark} maxlength={'12'} minlength={'6'} evtSetValue={setCount} />
              <Input name={'Lastname'} type={'text'} theme={themeDark} maxlength={'16'} minlength={'6'} />
            </div>
            <div className='flex gap-2 pt-4'>
              <Input id={'Usernamelabel'} name={'Username'} icon={'USER'} type={'text'} theme={themeDark} maxlength={'12'} minlength={'6'} label={'Name'} placeholder={'José Pedro'} />
              <Input id={'Lastnamelabel'} name={'Lastname'} type={'text'} theme={themeDark} maxlength={'16'} minlength={'6'} label={'Lastname'} placeholder={'Fuenzalida'} />
            </div>
            <div className='flex gap-2 pt-4'>
              <Input name={'Phone number'} icon={'PHONE'} type={'tel'} pattern={'PHONE'} theme={themeDark} maxlength={'11'} minlength={'11'} />
              <Input name={'Phone number'} type={'tel'} theme={themeDark} />
            </div>
          </div>

          <div className='flex-col gap-2 mt-2 p-4 bg-white rounded-lg border border-neutral-700'>
            <div className='flex gap-2'>
              <Btn name={'Home'} icon={'HOME'} theme={themeLight} />
              <Btn name={'Settings'} theme={themeLight} />
              <Btn icon={'GEAR'} theme={themeLight} />
              <Selection theme={themeLight} items={itemSelect} />
            </div>
            <div className='flex gap-2 pt-4'>
              <Input name={'Username'} icon={'USER'} type={'text'} theme={themeLight} />
              <Input name={'Lastname'} type={'text'} theme={themeLight} />
            </div>
          </div>

          <div className='border border-neutral-700 rounded-lg mt-2'>
            <div className='flex gap-2 px-4 pt-4'>
              <Btn name={'Log out'} icon={'QUIT'} color={'RED'} />
              <Btn name={'Log out'} color={'RED'} />
              <Btn icon={'QUIT'} color={'RED'} />
            </div>
            <div className='flex gap-2 pt-4 px-4'>
              <Btn name={'Send'} icon={'AIRPLANE'} color={'BLUE'} />
              <Btn name={'Send'} color={'BLUE'} />
              <Btn icon={'AIRPLANE'} color={'BLUE'} />
            </div>
            <div className='flex gap-2 p-4'>
              <Btn name={'Profile'} icon={'CODE'} color={'GREEN'} />
              <Btn name={'Profile'} color={'GREEN'} />
              <Btn icon={'CODE'} color={'GREEN'} />
            </div>
          </div>

        </div>
      </div>
    
  )
}

export default App
