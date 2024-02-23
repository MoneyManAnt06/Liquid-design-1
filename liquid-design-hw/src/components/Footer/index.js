import { v4 as uuidv4 } from 'uuid';
import FooterFollowers from '../FooterFollowers';
import CardPayment from "@/assets/images/cardpayment.png"
import Image from 'next/image';
import CopyRight from '../CopyRight';
import Input from '../Input';
import { footerData } from '@/data/Footer';
import FooterApp from '../FooterApp';
import apple from "@/assets/images/apple.png"
import googleplay from "@/assets/images/googleplay.png"


const Footer = () => {

    const renderFooterList = (list) => {
        return list.map((item) => 
            (   
                <li  key={uuidv4()}>
                    {item.text}
                 </li>
            )
        )
    }


    const renderFooterItems = () => {
        return footerData.items.map((item) => {
            return (
               <div key={uuidv4()}>
                    <h3 className='Footer-titles'>{item.title}</h3>
                    <ul className='Footer-lists-items'>
                        {renderFooterList(item.list)}
                    </ul>
               </div>  
            )
        })
    }

  return (
    <footer className='Footer'>
        <div className='container Footer-content'>
            <div className='Footer-lists-container'>
            <FooterApp
                title='App'
                src1={googleplay}
                alt1='googleplay button'
                src2={apple}
                alt2='apple button'
            />
                {renderFooterItems()}
                <FooterFollowers title='Síguenos'/>
            </div>
            <div className='Footer-newsletter'>
                <h2>Newsletter</h2>
                <Input type='text' placeholder='Nombre' />
                <Input type='email' placeholder='Correo electronico' />
                <Image src={CardPayment} alt='CardPayment' width='auto' height='auto' />
            </div>
            <div className='Footer-copyright'>
                <CopyRight 
                    text='© 2019. Bellify. All rights reserved.'
                    text2='Work done by '
                />
            </div>
        </div>
    </footer>
  )
}

export default Footer