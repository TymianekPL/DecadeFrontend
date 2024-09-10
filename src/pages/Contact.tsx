interface ContactProps {
    path?: string;
}

const Contact = ({}: ContactProps) => (
    <div>
        <h1>Contact</h1>
        <p>
             <div>Email: <a href="mailto:tymi@tymi.org">tymi@tymi.org</a></div>
             <div>Discord: <a href="https://discord.gg/9sAgruPPWq">Decade</a></div>
             <div>Github: <a href="Https://github.com/TymianekPL/DecadeFrontend">TymianekPL/DecadeFrontend</a></div>
        </p>
    </div>
);

export default Contact;
