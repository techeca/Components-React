import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RoundComplete from './components/RoundComplete'
import Btn from './components/FormInputs/Btn'
import Selection from './components/FormInputs/Selection'
import Input from './components/FormInputs/Input'
import Labels from './components/Labels'

function App() {
  const [count, setCount] = useState('')
  const [lastname, setLastname] = useState('')
  const [themeDark, setThemeDark] = useState('DARK')
  const [themeLight, setThemeLight] = useState('LIGHT')
  const [glassmorphism, setGlassmorphism] = useState(false)

  const itemSelect = [
    {id: 1, name: 'Option 1', value: '1'},
    {id: 2, name: 'Option 2', value: '2'},
    {id: 3, name: 'Option 3', value: '3'}
  ]

  return (
    themeDark && themeLight === undefined ? 'Loading' :
      <div className=''>
        <div>

          <div className={`border rounded-lg mb-2 dark:border-neutral-700 ${glassmorphism ? 'backdrop-blur-[2px]' : 'dark:bg-zinc-900 bg-white/60'}`}>
            <div className='flex gap-2 p-4'>
              <input type='checkbox' onClick={e => setGlassmorphism(e.target.checked)} />
                Glassmorphism
              <label>{count} {lastname}</label>
            </div>
          </div>
        
          <div className='flex-col gap-2 p-4 dark:bg-black/40 bg-white/60 rounded-lg border dark:border-neutral-800 border-neutral-300'>
            <div className='pb-4'>
              <Labels message={'Button'} size={'lg'} />
            </div>
            <div className='flex gap-2'>
              <Btn name={'Settings'} theme={themeDark} />
            </div>
            <div className='py-4'>
              <Labels message={'Button with icon'} size={'lg'} />
            </div>
            <div className='flex gap-2'>
              <Btn name={'Home'} icon={'HOME'} theme={themeDark} />
              <Btn icon={'GEAR'} theme={themeDark} />
            </div>
            <div className='py-4'>
              <Labels message={'Select'} size={'lg'} />
            </div>
            <div className='flex gap-2'>
              <Selection theme={themeDark} items={itemSelect} />
            </div>
            <div className='py-4'>
              <Labels message={'Input'} size={'lg'} />
            </div>
            <div className='flex gap-2'>
              <Input id={'usernamesimple'} name={'Username'} icon={'USER'} type={'text'} theme={themeDark} maxlength={'12'} minlength={'6'} evtSetValue={setCount} />
              <Input name={'Zip code'} type={'number'} theme={themeDark} />
            </div>
            <div className='py-4'>
              <Labels message={'Input with icon'} size={'lg'} />
            </div>
            <div className='flex gap-2'>
              <Input name={'Username'} icon={'USER'} type={'text'} theme={themeDark} maxlength={'12'} minlength={'6'} evtSetValue={setCount} />
              <Input name={'Phone number'} icon={'PHONE'} type={'tel'} pattern={'PHONE'} placeholder={'569-12345678'} theme={themeDark} maxlength={'12'} minlength={'12'} />
            </div>
            <div className='py-4'>
              <Labels message={'Input with Label'} size={'lg'} />
            </div>
            <div className='flex gap-2'>
              <Input id={'Usernamelabel'} name={'Username'} type={'text'} theme={themeDark} maxlength={'12'} minlength={'6'} label={'Name'} placeholder={'José Pedro'} invalidMessage={'Hey! fix your Username >:('} />
              <Input id={'Lastnamelabel'} name={'Lastname'} icon={''} type={'text'} theme={themeDark} maxlength={'16'} minlength={'6'} label={'Lastname'} placeholder={'Fuenzalida'} invalidMessage={'Fix your Lastname'} />
            </div>
            <div className='py-4'>
              <Labels message={'Input with validation'} size={'lg'} />
            </div>
            <div className='flex gap-2'>
              <Input id={'Usernamelabel'} name={'Username'} type={'text'} theme={themeDark} maxlength={'12'} minlength={'6'} label={'Name'} placeholder={'José Pedro'} invalidMessage={'Hey! fix your Username >:('} value='a' />
              <Input id={'Lastnamelabel'} name={'Lastname'} icon={''} type={'text'} theme={themeDark} maxlength={'16'} minlength={'6'} label={'Lastname'} placeholder={'Fuenzalida'} invalidMessage={'Fix your Lastname >:('} />
            </div>
          </div>

        </div>
      </div>
    
  )
}

export default App