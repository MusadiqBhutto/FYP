const EmailButton = (props) => {

    const email = props.email;
    const subject = 'Hello!';
    const body = 'This is the body of the email';


    const handleClick = () => {

        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailLink, '_blank');
    };

    return (
        <button  className="bg-slate-700 text-white rounded-lg uppercase p-3 hover:opacity-95" onClick={handleClick}>Send Email</button>
    );
};


export default EmailButton;