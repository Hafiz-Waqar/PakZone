import WhatsAppWidget from 'react-whatsapp-widget'
function Footer() {
    return (
        <div className="md:flex-row flex-col max-w-screen-2xl mx-auto py-5 text-center md:justify-center px-5" style={{display:"flex"}} >
            <div className="text-gray-800 md:mb-4 w-auto" >
                Devloped with ♥ by <a className="underline" href="https://hafiz-waqar-ali.netlify.app/">Hafiz_Waqar & Maham Shoaib</a>
                
            </div>
            {/* <WhatsAppWidget phoneNumber='+923087519270' className="whatsapp1"/> */}
        </div>
    )
}

export default Footer
