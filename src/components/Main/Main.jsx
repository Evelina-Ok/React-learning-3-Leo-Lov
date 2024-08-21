import style from './Main.module.scss'

import { Card } from './Card/Card'
import { cards, team } from '../../../src/data/data.js'
import { Team } from './Team/Team.jsx'
import { AboutContent } from './About/AboutContent/AboutContent.jsx'
import { AboutContentTwo } from './About/AboutContentTwo/AboutContentTwo.jsx'


export const Main = () => {
    return (
        <>
        <main className={style.mainStyle}>
            <section className={style.cardsStyle}>
                {cards.map((card) => (
                    <Card key={card.title} headerText={card.title} cardContent={card.content}></Card>
                ))}
            </section>

           <AboutContent />
           <AboutContentTwo />

            <section className={style.teamStyle}>
                {team.map((team) => (
                    <Team key={team.name} name = {team.name} img = {team.img} text = {team.description}></Team>
                ))}
            </section>

          
        </main>
        </>
    )
} 