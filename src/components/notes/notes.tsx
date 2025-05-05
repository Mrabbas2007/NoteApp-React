import { useState } from "react"
import { pic1 } from "../../images";


const Notes = () => {

    const [text, setText] = useState<any>([
        {   name: 'abbas4',
            text: 'در فروشگاه‌های اینترنتی، مشتری‌ها همیشه دنبال تجربه خریدی راحت و شخصی‌سازی‌شده هستن. فرض کنید فروشنده کیک هستید و مشتری بخواد اندازه، طعم، یا متن روی کیک رو انتخاب کنه؛ یا شاید فروشنده تی‌شرت باشید و مشتری بخواد رنگ، سایز، یا طراحی دلخواهش رو وارد کنه. اینجاست که افزونه قدرتمند Product Add-ons & Extra Options برای ووکامرس وارد میشه!'
        },
        {   name: 'abbas',
            text: 'در فروشگاه‌های اینترنتی، مشتری‌ها همیشه دنبال تجربه خریدی راحت و شخصی‌سازی‌شده هستن. فرض کنید فروشنده کیک هستید و مشتری بخواد اندازه، طعم، یا متن روی کیک رو انتخاب کنه؛ یا شاید فروشنده تی‌شرت باشید و مشتری بخواد رنگ، سایز، یا طراحی دلخواهش رو وارد کنه. اینجاست که افزونه قدرتمند Product Add-ons & Extra Options برای ووکامرس وارد میشه!'
        },
        {   name: 'abbas',
            text: 'در فروشگاه‌های اینترنتی، مشتری‌ها همیشه دنبال تجربه خریدی راحت و شخصی‌سازی‌شده هستن. فرض کنید فروشنده کیک هستید و مشتری بخواد اندازه، طعم، یا متن روی کیک رو انتخاب کنه؛ یا شاید فروشنده تی‌شرت باشید و مشتری بخواد رنگ، سایز، یا طراحی دلخواهش رو وارد کنه. اینجاست که افزونه قدرتمند Product Add-ons & Extra Options برای ووکامرس وارد میشه!'
        },
        {   name: 'abbas',
            text: 'در فروشگاه‌های اینترنتی، مشتری‌ها همیشه دنبال تجربه خریدی راحت و شخصی‌سازی‌شده هستن. فرض کنید فروشنده کیک هستید و مشتری بخواد اندازه، طعم، یا متن روی کیک رو انتخاب کنه؛ یا شاید فروشنده تی‌شرت باشید و مشتری بخواد رنگ، سایز، یا طراحی دلخواهش رو وارد کنه. اینجاست که افزونه قدرتمند Product Add-ons & Extra Options برای ووکامرس وارد میشه!'
        },
    ]);


    return (
        <div className="relative w-[calc(75%-12px)] h-[90%] flex justify-center items-center ">
            <div className="absolute top-0 z-50 w-full h-24 bg-gradient-to-b from-[#141414] to-transparent "></div>
            
            <div className="absolute w-full h-full overflow-hidden overflow-y-scroll cursor- scroll-none top-0 flex flex-col justify-center items-center ">
                <div className="w-[90%] h-auto my-20"></div>
                {text.map((item: any, index: number) => {
                    return (
                        <div className="w-[90%] h-auto p-5 m-5 mt-10 bg-zinc-900 rounded-2xl shadow-lg shadow-black/40 ">
                            <div className="w-auto flex justify-start items-center">
                                <div><img className="w-[50px] h-auto border-l m-2 pl-2 " src={pic1} alt="" /></div>
                                <div>
                                    <h6>عباس سیدالحسینی</h6>
                                    <span>{item.name}@</span>
                                </div>
                            </div>
                            <p className="text-justify border-t mt-2 pt-2 ">{item.text}</p>
                        </div>
                    )
                })}
            </div>
            
            <div className="absolute bottom-0 z-50 w-full h-24 bg-gradient-to-t from-[#141414] to-transparent "></div>
        </div> 
    )
}


export default Notes