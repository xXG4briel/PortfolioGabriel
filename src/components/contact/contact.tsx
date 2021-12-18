import './contact.scss';

function Contact() {
    return (
        <main className="contact">
            <img src="./assets/images/contact_us.svg" draggable="false" />

            <form>
                <aside>
                    <fieldset className="field contact-input">
                        <input className="field__input" type="text" placeholder=" " />
                        <label className="field__label" htmlFor="">Nome</label>
                    </fieldset>

                    <fieldset className="field contact-input">
                        <input className="field__input" type="text" placeholder=" " />
                        <label className="field__label" htmlFor="">Assunto</label>
                    </fieldset>

                    <fieldset className="field contact-input">
                        <input className="field__input" type="text" placeholder=" " />
                        <label className="field__label" htmlFor="">Seu e-mail</label>
                    </fieldset>

                    <fieldset className="field contact-textarea">
                        <textarea className="field__textarea" name="" placeholder=" " ></textarea>
                        <label className="field__label" htmlFor="">Texto</label>
                    </fieldset>
                </aside>
            </form>
        </main>
    );
}

export default Contact;