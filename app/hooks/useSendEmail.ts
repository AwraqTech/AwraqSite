import { useState } from 'react'
import emailjs from 'emailjs-com'

export default function useSendEmail() {
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [inquiry, setInquiry] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [success, setSuccess] = useState<boolean>(false);
    const [failed, setFailed] = useState<boolean>(false);

    const generateRandomNumber = (): string => {
        return Math.floor(1000000000 + Math.random() * 9000000000).toString()
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setIsSubmitting(true)
        setErrorMessage('')

        try {
            if (!email && !name && !phone && !inquiry) {
                setFailed(true);
                setTimeout(() => {
                    setFailed(false);
                }, 5000)
                return
            }

            const templateParams = {
                user_email: email,
                user_name: name,
                user_phone: phone,
                inquiry_subject: `inquiry-request-${generateRandomNumber()}`,
                inquiry_body: inquiry,
                to_email: 'care@awraq.tech',
            };

            await emailjs.send(
                'service_9dm0p7k',
                'template_7ns87pf',
                templateParams,
                'BUyNOh84kVBqHsCVT'
            );

            setSuccess(true);

            setEmail('')
            setName('')
            setPhone('')
            setInquiry('')

            setTimeout(() => {
                setSuccess(false);
            }, 5000)

        } catch (error: unknown) {
            setFailed(true);

            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.');
            }

            setTimeout(() => {
                setSuccess(false);
            }, 5000);
        } finally {
            setIsSubmitting(false)
        }
    }

    return {
        email,
        setEmail,
        name,
        setName,
        phone,
        setPhone,
        inquiry,
        setInquiry,
        isSubmitting,
        errorMessage,
        handleSubmit,
        success,
        failed
    };
}