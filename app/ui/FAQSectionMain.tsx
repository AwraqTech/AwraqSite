import React from 'react'
import AccordionMenu from './AccordionMenu'

function FAQSectionMain() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full max-w-6xl mx-auto mt-12">
        <h1 className='sm:text-4xl text-3xl font-bold'>الأسئلة الشائعة</h1>
        <AccordionMenu 
        title='ما هي منصة أوراق؟'
        description='هي منصة تمكن التجار من إدارة أنشطتهم التجارية بكل سهولة و تيسيير'
        />
        <AccordionMenu 
        title='هل يوجد رسوم إضافية عند البيع؟'
        description='لدى منصة أوراق لا يوجد أي رسوم إضافية عند البيع و إستخدام منصتنا إطلاقا, فقط يوجد رسوم الإشتراك مع رسوم أخرى غير متعلقة في المبيعات'
        />
        <AccordionMenu 
        title='ما هي آلية الإشتراك؟'
        description='عند إشتراكك في أحد الباقات سيتم تخييرك بفترة الإشتراك, سنوية أم شهرية. و عند إنتهاء فترة الإشتراك سيتم تجميد حسابك حتى تقوم بالسداد مرة أخرى. لا يوجد أي آلية سحب تلقائي لدى إشتراكك في منصتنا'
        />
        <AccordionMenu 
        title='كيف يمكنني التواصل معكم؟'
        description='يمكنك التواصل معنا بأحد الخيارات المتاحة في خانة التواصل معنا, متواجدون نحن في جميع قنوات التواصل الإجتماعي, كذلك يمكنك التواصل عبر الهاتف المجاني أو عن طريق البريد الإلكتروني'
        />
    </div>
  )
}

export default FAQSectionMain