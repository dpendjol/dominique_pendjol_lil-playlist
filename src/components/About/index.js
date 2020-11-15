import './About.css';

const About = () => {
    return (
    <div className="about__container">
        <h1 className="about__title">
            Over dit project 
        </h1>
        <h2 className="about__subtitle"> 
            Gebruik van React en React Router
        </h2>
        <div className="about__paragraph">
            Dit project is om te oefenen met het opzetten van een project met React om bekend te raken met de mogelijkheden hiervan.
            <h3>Mogelijkheden van deze app</h3>
            <ul>
                <li>Je kunt een liedje toevoegen</li>
                <li>Je kunt zelf keus maken voor genres als je een liedje toevoegd</li>
                <li>Je kunt een rating toevoegen als je een liedje toevoegd</li>
                <li>Je kunt op 2 manieren kijken naar de lijst
                     <br />- De lijst ongegroepeerd
                     <br />- De lijst gegroepeerd door genres
                </li>
                <li>Je kunt de lijst filteren (in beide views) op het genre en op de rating</li>
            </ul>
        </div>
    </div>
    )
}

export default About;